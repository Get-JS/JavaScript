// queryselector는 class .css방식, tag, id 다 가져온다. 
// 쿼리 셀렉터는 부모에서 아래로 찾은것 중 첫번째것을 가져온다. 

// 그러나 querySeletorAll은 모든걸 가져온다. 
// (클래스명에 따른 엘리먼트들을 가져온다.) -> array
// 지양... 왜냐면 array 외부의 하나의 엘리먼트를 가져오는게 귀찮기 때문 
// 왜냐면 찾은 것이 유일하게 하나의 클래스명이라고 해도, array안에 넣기 때문

// 객체 가져오기
const form = document.querySelector(".js-greetingForm"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}
function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function handleSubmit(event){
    // 보통 event가 발생하면 root에서 일어나고 form에서 일어난다.
    // 이 event는 마치 일종의 거품같은거다.
    // 왜냐면 다른 모든 것들이 event에 반응하게 되기 때문
    // form을 제출하는 event가 발생하면 
    // event가 계속 위로 document까지 올라간다.
    // submit을 한 순간 form의 내용은 프로그램 되어진 대로 다른 곳으로 가고 
    // 페이지가 새로고침 된다.

    // 이 event의 기본 동작(default)을 막고 싶을 때 사용한다.
    event.preventDefault();
    
    // input 객체를 사용
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit" , handleSubmit);
}

// local stroage -> 자신의 유저 컴퓨터에 저장하는 방법 
// Local Storage 는 URLs을 기초로 동작 
// Server에서 Local Storage를 가져올 수 없다.
function loadName(){
    const curentUser = localStorage.getItem(USER_LS);
    if(curentUser === null){
        askForName();
    }
    else{
        paintGreeting(curentUser);
    }
}

function init(){
    loadName();
}
init();