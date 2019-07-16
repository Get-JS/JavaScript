// js 특징!!!
// HTML은  parser를 통해 dom을 구성 -> 객체화!!!
const title = document.getElementById("title");

console.log(title);

// 모든 기능 검색 
// title 구성 요소들 검색
console.dir(title);

// IT is DOM !!!!
// title의 아이디 돔의 innerHTML의 값을 변경
title.innerHTML = "Hi From JS";
title.style.color = "red";
document.title = 'I own you know';

function handleResize(event){
    // 자바스크립트는 자동적으로 함수를 객체에 붙인다.
    // 인자들을 자동적으로 받아서 함수가 인자를 사용한다.
    console.log(event);
    console.log('I have been resized');
}

function handleClick(){
    title.style.color = "blue";
}

// 처음 자바스크립트는 이벤트에 반응하기 위해서 만들어져 있다 .
// 이벤트는 웹사이트에서 발생하는 것들을 말한다.

// click, resize, submit, input , chane, load.... 
// 우리는 여기서 이벤트를 가로 챌 수 있다.
// ex) -> window

// form 은 submit을 거친다. 
// submit은 window에 존재하지 않는다.
// 왜냐면 window을 제출(submit)할 수 없으니깐.

// 우리가 이벤트를 받기 기다리는것이다. 
// No handleResize()(x) 문구 주의 !!!! 
// 자동으로 event 인자 전달(object)
// window.addEventListener("resize", handleResize(event));
window.addEventListener("resize", handleResize);
title.addEventListener("click", handleClick);

