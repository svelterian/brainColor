import{S as t,i as e,s as o,k as n,e as r,t as c,I as l,d as s,n as h,c as a,a as i,g as u,J as f,f as d,E as p,K as g,G as v,N as m,O as b,l as x,b as E,h as k,M as q}from"../chunks/vendor-aad5b782.js";import{g as B}from"../chunks/navigation-43bc8d96.js";import{s as w,q as y}from"../chunks/store-c7457dfe.js";import"../chunks/singletons-12a22614.js";function N(t,e,o){const n=t.slice();return n[16]=e[o],n}function R(t,e,o){const n=t.slice();return n[16]=e[o],n}function T(t){let e,o,l,g,v,m,b,q,B,w,y,N,R,T,I=t[1]+1+"";function U(t,e){return t[1]%2==0?P:O}let j=U(t),z=j(t);return{c(){e=r("p"),o=c("총 점수 : "),l=c(t[4]),g=n(),v=r("div"),m=r("progress"),b=n(),q=r("p"),B=n(),w=r("p"),y=c(I),N=c(" 번 문제!"),R=n(),z.c(),T=x(),this.h()},l(n){e=a(n,"P",{});var r=i(e);o=u(r,"총 점수 : "),l=u(r,t[4]),r.forEach(s),g=h(n),v=a(n,"DIV",{style:!0});var c=i(v);m=a(c,"PROGRESS",{style:!0,max:!0}),i(m).forEach(s),c.forEach(s),b=h(n),q=a(n,"P",{}),i(q).forEach(s),B=h(n),w=a(n,"P",{});var f=i(w);y=u(f,I),N=u(f," 번 문제!"),f.forEach(s),R=h(n),z.l(n),T=x(),this.h()},h(){f(m,"width","100%"),m.value=t[3],E(m,"max","100"),f(v,"width","100%")},m(t,n){d(t,e,n),p(e,o),p(e,l),d(t,g,n),d(t,v,n),p(v,m),d(t,b,n),d(t,q,n),d(t,B,n),d(t,w,n),p(w,y),p(w,N),d(t,R,n),z.m(t,n),d(t,T,n)},p(t,e){16&e&&k(l,t[4]),8&e&&(m.value=t[3]),2&e&&I!==(I=t[1]+1+"")&&k(y,I),j===(j=U(t))&&z?z.p(t,e):(z.d(1),z=j(t),z&&(z.c(),z.m(T.parentNode,T)))},d(t){t&&s(e),t&&s(g),t&&s(v),t&&s(b),t&&s(q),t&&s(B),t&&s(w),t&&s(R),z.d(t),t&&s(T)}}}function I(t){let e,o,l,g,m,b,x,E,k,q,B,w,y,N,R,T,I,O,P,U,j;return{c(){e=r("h1"),o=c("게임하는 방법"),l=n(),g=r("p"),m=r("b"),b=c("1. 문제로 주어진 텍스트에 배경색이 [없을] 경우"),x=r("br"),E=c("\n        -> 문제의 텍스트와 선택지의 글자색이 같은 것을 고릅니다"),k=r("br"),q=r("br"),B=n(),w=r("b"),y=c("2. 문제로 주어진 텍스트에 배경색이 [있을] 경우"),N=r("br"),R=c("\n        => 문제의 배경색과 선택지의 텍스트가 같은 것을 고릅니다"),T=r("br"),I=r("br"),O=c("\n\n        tip : 빨리 맞출수록 점수가 많아요!! 늦게 맞춰도 점수는 있으니 진행바에 쫄지 마세요."),P=r("br"),U=r("br"),j=c("\n        준비되었나요? 이제 시작 버튼을 누르고 도전!!"),this.h()},l(t){e=a(t,"H1",{style:!0});var n=i(e);o=u(n,"게임하는 방법"),n.forEach(s),l=h(t),g=a(t,"P",{});var r=i(g);m=a(r,"B",{});var c=i(m);b=u(c,"1. 문제로 주어진 텍스트에 배경색이 [없을] 경우"),c.forEach(s),x=a(r,"BR",{}),E=u(r,"\n        -> 문제의 텍스트와 선택지의 글자색이 같은 것을 고릅니다"),k=a(r,"BR",{}),q=a(r,"BR",{}),B=h(r),w=a(r,"B",{});var f=i(w);y=u(f,"2. 문제로 주어진 텍스트에 배경색이 [있을] 경우"),f.forEach(s),N=a(r,"BR",{}),R=u(r,"\n        => 문제의 배경색과 선택지의 텍스트가 같은 것을 고릅니다"),T=a(r,"BR",{}),I=a(r,"BR",{}),O=u(r,"\n\n        tip : 빨리 맞출수록 점수가 많아요!! 늦게 맞춰도 점수는 있으니 진행바에 쫄지 마세요."),P=a(r,"BR",{}),U=a(r,"BR",{}),j=u(r,"\n        준비되었나요? 이제 시작 버튼을 누르고 도전!!"),r.forEach(s),this.h()},h(){f(e,"text-align","center")},m(t,n){d(t,e,n),p(e,o),d(t,l,n),d(t,g,n),p(g,m),p(m,b),p(g,x),p(g,E),p(g,k),p(g,q),p(g,B),p(g,w),p(w,y),p(g,N),p(g,R),p(g,T),p(g,I),p(g,O),p(g,P),p(g,U),p(g,j)},p:v,d(t){t&&s(e),t&&s(l),t&&s(g)}}}function O(t){let e,o,l,g,v,m,b=t[5][t[2].question.text]+"",B=t[2].choice,w=[];for(let n=0;n<B.length;n+=1)w[n]=U(N(t,B,n));return{c(){e=r("div"),o=c(b),l=n(),g=r("p"),v=n();for(let t=0;t<w.length;t+=1)w[t].c();m=x(),this.h()},l(t){e=a(t,"DIV",{style:!0,class:!0});var n=i(e);o=u(n,b),n.forEach(s),l=h(t),g=a(t,"P",{}),i(g).forEach(s),v=h(t);for(let e=0;e<w.length;e+=1)w[e].l(t);m=x(),this.h()},h(){f(e,"color","white"),f(e,"background-color",t[2].question.color),E(e,"class","question svelte-1nq00i9")},m(t,n){d(t,e,n),p(e,o),d(t,l,n),d(t,g,n),d(t,v,n);for(let e=0;e<w.length;e+=1)w[e].m(t,n);d(t,m,n)},p(t,n){if(4&n&&b!==(b=t[5][t[2].question.text]+"")&&k(o,b),4&n&&f(e,"background-color",t[2].question.color),572&n){let e;for(B=t[2].choice,e=0;e<B.length;e+=1){const o=N(t,B,e);w[e]?w[e].p(o,n):(w[e]=U(o),w[e].c(),w[e].m(m.parentNode,m))}for(;e<w.length;e+=1)w[e].d(1);w.length=B.length}},d(t){t&&s(e),t&&s(l),t&&s(g),t&&s(v),q(w,t),t&&s(m)}}}function P(t){let e,o,l,g,v=t[5][t[2].question.text]+"",m=t[2].choice,b=[];for(let n=0;n<m.length;n+=1)b[n]=j(R(t,m,n));return{c(){e=r("div"),o=c(v),l=n();for(let t=0;t<b.length;t+=1)b[t].c();g=x(),this.h()},l(t){e=a(t,"DIV",{style:!0,class:!0});var n=i(e);o=u(n,v),n.forEach(s),l=h(t);for(let e=0;e<b.length;e+=1)b[e].l(t);g=x(),this.h()},h(){f(e,"color",t[2].question.color),f(e,"background-color","white"),E(e,"class","question svelte-1nq00i9")},m(t,n){d(t,e,n),p(e,o),d(t,l,n);for(let e=0;e<b.length;e+=1)b[e].m(t,n);d(t,g,n)},p(t,n){if(4&n&&v!==(v=t[5][t[2].question.text]+"")&&k(o,v),4&n&&f(e,"color",t[2].question.color),572&n){let e;for(m=t[2].choice,e=0;e<m.length;e+=1){const o=R(t,m,e);b[e]?b[e].p(o,n):(b[e]=j(o),b[e].c(),b[e].m(g.parentNode,g))}for(;e<b.length;e+=1)b[e].d(1);b.length=m.length}},d(t){t&&s(e),t&&s(l),q(b,t),t&&s(g)}}}function U(t){let e,o,n,l,h=t[5][t[16].text]+"";function v(){return t[11](t[16])}return{c(){e=r("button"),o=c(h),this.h()},l(t){e=a(t,"BUTTON",{style:!0,class:!0});var n=i(e);o=u(n,h),n.forEach(s),this.h()},h(){f(e,"color","white"),f(e,"background-color",t[16].color),E(e,"class","choice svelte-1nq00i9")},m(t,r){d(t,e,r),p(e,o),n||(l=g(e,"click",v),n=!0)},p(n,r){t=n,4&r&&h!==(h=t[5][t[16].text]+"")&&k(o,h),4&r&&f(e,"background-color",t[16].color)},d(t){t&&s(e),n=!1,l()}}}function j(t){let e,o,n,l,h=t[5][t[16].text]+"";function v(){return t[10](t[16])}return{c(){e=r("button"),o=c(h),this.h()},l(t){e=a(t,"BUTTON",{style:!0,class:!0});var n=i(e);o=u(n,h),n.forEach(s),this.h()},h(){f(e,"color",t[16].color),f(e,"background-color","white"),E(e,"class","choice svelte-1nq00i9")},m(t,r){d(t,e,r),p(e,o),n||(l=g(e,"click",v),n=!0)},p(n,r){t=n,4&r&&h!==(h=t[5][t[16].text]+"")&&k(o,h),4&r&&f(e,"color",t[16].color)},d(t){t&&s(e),n=!1,l()}}}function z(t){let e,o,n,l;return{c(){e=r("button"),o=c("시작"),this.h()},l(t){e=a(t,"BUTTON",{style:!0});var n=i(e);o=u(n,"시작"),n.forEach(s),this.h()},h(){f(e,"width","45%"),f(e,"height","60px"),f(e,"font-weight","bold"),f(e,"font-size","30px")},m(r,c){d(r,e,c),p(e,o),n||(l=g(e,"click",t[6]),n=!0)},p:v,d(t){t&&s(e),n=!1,l()}}}function D(t){let e,o,n,l;return{c(){e=r("button"),o=c("그만하기"),this.h()},l(t){e=a(t,"BUTTON",{style:!0});var n=i(e);o=u(n,"그만하기"),n.forEach(s),this.h()},h(){f(e,"width","45%"),f(e,"height","60px"),f(e,"font-weight","bold"),f(e,"font-size","30px")},m(r,c){d(r,e,c),p(e,o),n||(l=g(e,"click",t[7]),n=!0)},p:v,d(t){t&&s(e),n=!1,l()}}}function M(t){let e,o,m,b,x,E,k,q;function B(t,e){return t[0]?T:I}let w=B(t),y=w(t);function N(t,e){return t[0]?D:z}let R=N(t),O=R(t);return{c(){e=n(),y.c(),o=n(),m=r("p"),O.c(),b=n(),x=r("button"),E=c("홈으로"),this.h()},l(t){l('[data-svelte="svelte-l8fzlx"]',document.head).forEach(s),e=h(t),y.l(t),o=h(t),m=a(t,"P",{style:!0});var n=i(m);O.l(n),b=h(n),x=a(n,"BUTTON",{style:!0});var r=i(x);E=u(r,"홈으로"),r.forEach(s),n.forEach(s),this.h()},h(){document.title="게임 하기",f(x,"width","45%"),f(x,"height","60px"),f(x,"font-weight","bold"),f(x,"font-size","30px"),f(m,"text-align","center")},m(n,r){d(n,e,r),y.m(n,r),d(n,o,r),d(n,m,r),O.m(m,null),p(m,b),p(m,x),p(x,E),k||(q=g(x,"click",t[8]),k=!0)},p(t,[e]){w===(w=B(t))&&y?y.p(t,e):(y.d(1),y=w(t),y&&(y.c(),y.m(o.parentNode,o))),R===(R=N(t))&&O?O.p(t,e):(O.d(1),O=R(t),O&&(O.c(),O.m(m,b)))},i:v,o:v,d(t){t&&s(e),y.d(t),t&&s(o),t&&s(m),O.d(),k=!1,q()}}}function S(t,e,o){let n,r;m(t,w,(t=>o(4,n=t))),m(t,y,(t=>o(13,r=t)));let c,l=!1,s=r,h=-1,a=null,i=100;b(w,n=0,n);function u(){o(1,h=-1),clearInterval(c),o(2,a=null),o(0,l=!1),alert("수고하였어요. 총 점수는"+n+"입니다."),B("/save")}function f(){o(1,h+=1),h==s.length?u():(o(2,a=s[h]),a.choice.sort((()=>Math.random()-.5)),o(2,a),clearInterval(c),o(3,i=100),c=setInterval((function(){o(3,i-=1),0==i&&clearInterval(c)}),40))}return[l,h,a,i,n,{red:"빨강",orange:"주황",yellow:"노랑",purple:"보라",green:"초록",black:"검정",blue:"파랑",brown:"갈색",gray:"회색",pink:"분홍"},function(){s.sort((()=>Math.random()-.5)),alert("준비됐나요?"),b(w,n=0,n),f(),o(0,l=!0)},u,function(){B("/")},f,t=>{b(w,n+=a.question.text==t.color?10+i:0,n),f()},t=>{b(w,n+=a.question.color==t.text?10+i:0,n),f()}]}export default class extends t{constructor(t){super(),e(this,t,S,M,o,{})}}
