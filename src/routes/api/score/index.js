import { MongoClient } from 'mongodb';
import { nanoid } from 'nanoid';     // 랜덤아이디 발생시켜주는 nanoid 추가

import { connectionString } from '$lib/dbURL.js';
let uri = connectionString;                     

export async function get(request){
    const client = new MongoClient(uri);
    let scoreList = [];
    try {
        await client.connect();
        const db = client.db('brainColor');
       
        scoreList = await db.collection('score')
                            .find()
                            .sort( { score : -1 } )
                            .limit(10)
                            .toArray();
        return {
            status:200,
            body: {
                list : scoreList
            }
        }
    }catch (e){
        return {
            status:500,
            body: {
                list : [],
                msg : e.message
            }
        }
    } finally {
        await client.close();
        console.log("디비 Close");
    }
}

export async function put(request){
    const client = new MongoClient(uri);         //client 오브젝트 생성
    let rtn = {};                                //결과 저장 오브젝트
    let score = JSON.parse(request.body);        //request body 를 오브젝트로 변환

    /* 입력 형식 체크 */
    if(!score.name || !score.score){
        console.log(score);
        throw "잘못된 형식 입니다.";
    }
    score["_id"] = nanoid();

    try {
        await client.connect();                  //db 연결
        const db = client.db('brainColor');      //brainColor 디비로 이동
       
        /* 데이터 저장하기 코드 작성 하기 */
        rtn = await db.collection('score').insertOne(score);

        return {
            status:200,
            body: {
                result : rtn
            }
        }

    }catch (e){
        return {
            status:500,
            body: {
                msg : e.message
            }
        }
    } finally {
        await client.close();
        console.log("디비 Close");
    }
}