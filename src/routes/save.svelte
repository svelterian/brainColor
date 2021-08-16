<script>
    import { goto } from '$app/navigation';
    import { score, scoreList } from "$lib/store.js";

    let name = "--";
    let bodyData;                                 //REST API로  보낼 변수 선언 
    let disabled = false;                         //비활성화 상태 모드 변수 선언
    let message = "이름을 입력하고 저장 버튼을 누르세요."; //최초 안내 메시지
    
    //HTML 블록에 값이 변경되면 bodyData를 자동으로 변경함
    $:bodyData = { score : $score , name : name }; 


    // 게임종료 직후 모드 캡쳐용 
    // $score = 778;
    // name = "박승현";

    // 저장중 모드 캡쳐용 
    // $score = 778;
    // name = "박승현";
    // disabled = true;
    // message = "점수 저장중...";

    //fetch 사용을 위해서 비동기 함수로 변경
    async function saveScore(){

        //진입과 동시에 disabled를 true 로 바꿈 -> 컨트롤 비활성화
        disabled = true;

        //사용자에게 점수 저장으로 보이도록 message 변경
        message = "점수 저장중...";

        //서버 REST API PUT Method 호출 
        let rtn = await fetch('/api/score', {
                    method: 'PUT',
                    body: JSON.stringify(bodyData)
        });

        //await 종료후 팝업
        if(rtn.status==200){
            alert("저장되었습니다.");
        }

        //홈으로 화면 이동
        goto("/");
    }
</script>

<svelte:head>
    <title>점수 저장하기</title>
</svelte:head>

<h1 style="text-align:center;">점수 저장하기</h1>

<!-- <h4>이름을 입력하고 저장 버튼을 누르세요.</h4> -->
<h4>{message}</h4>

<p>획득 점수 : {$score}</p>

<!-- <p>이름 : <input type="text" bind:value={name}/></p> -->
<p>이름 : <input type="text" bind:value={name} {disabled}/></p>

<!-- <button on:click={saveScore}> 저장 </button> -->
<button on:click={saveScore} {disabled}> 저장 </button>