//from 메서드로 진짜 배열 만들기
function addMark() {
    let newData = [];
    for (let i = 0; i < arguments.length; i++) {
        newData.push(arguments[i] + "!");
    }
    console.log(newData);
}
// 인자값을 안주더라도 내부값의 argument(객체)라는 펀션아안에 있는 
// 내부 지역변수와 같은 특별한 값을 이용한다. -> 베열과 비슷한 형태
// 아주 권장되는 패턴은 아니다.
addMark(1, 2, 3, 4, 5);


// 1. Error -> arguments는 map을 못쓴다.
function addMark() {
    // map을 사용하여 순회하면서 필요한 값을 추가하고,
    // 새로운 배열을 반환
    // But arguments는 map을 못쓴다.. 배열이 아니기 때문에
    let newData = arguments.map(function (value) {
        return value + "!";
    });

    console.log(newData);
}

// 2. from!!!
function addMark2() {
    // form으로 진짜 배열로 만든다.
    let newArray = Array.from(arguments);
    let newData = newArray.map(function (value) {
        return value + "!";
    });
    console.log(newData);
}