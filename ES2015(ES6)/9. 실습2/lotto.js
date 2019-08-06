/*
    로또 번호 만들기
    1. 유일한값을 추출하는 과정에서 Set을 사용한다.
    2. getRandomNumber함수에 변수를 전달하는 과전에서 destructuring을 사용
*/

const SETING = {
    name : "LUCKY LOTTO!", 
    count : 6,
    maxNumber : 45
}
// min (포함) 과 max (포함) 사이의 임의 정수를 반환
// Math.round() 를 사용하면 고르지 않은 분포를 얻게된다!
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/random 에서 가져옴 ;;
function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomNumber() {
    // 랜덤한 유일한 숫자값을 추출
    // set
    let numSet = new Set();
    let {count , maxNumber} = SETING;

    // 6개 추출 
    while(numSet.size < count){
        numSet.add(getRandomIntInclusive(1, maxNumber));
    }
    return [...Array.from(numSet)];
}

console.log(getRandomNumber());

