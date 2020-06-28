// const - 선언된 변수 지키기
// var로 대문자로 약속을 하는 상황
function isYourHome() {
    // 상수 키워드로 약속 지켰지만 변경이 됨..
    var HOME_NAME = "my house";
    HOME_NAME = "your house";
}

// 변경을 금지 시킴
function isYourHome() {
    const HOME_NAME = "my house";
    HOME_NAME = "your house";
}

// So what?
function home() {
    const homename = [1, 2, 3, 3,];
    homename = ["1", "2"];
    console.log(homename);
    // const를 기본으로 사용한다.
    // 그런데 변경이 될 수 잇는 변수는 let을 사용한다.
    // var는 사용하지 않는다.
}