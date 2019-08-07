// rest paramaters
// spread operator와 유사
// 들어오는 인자 값이 number??
// ES3
function checkNum() {
    // 가변인자(argument)활용하기 -> 가짜 배열
    // 기본 built-in function인 arguement가 있지만
    // 배열로 사용할 수 없다.
    // slice 실행해 줘~~
    const argArray = Array.prototype.slice.call(arguments);
    // Array
    console.log(toString.call(argArray));
    // if 안하면 Object Arguments 반환
    
    // every : 모두가 true일 경우만 true를 반환한다.
    const result = argArray.every( (v) => typeof v === "number");
    // false -> "55"는 문자열 
    console.log(result);
}

const result = checkNum(10, 2, 3, 4,5 , "55");

// ES6 
// 매개변수에 ... -> resetparameters
// 그 이외 변수 값 -> spread operator
function checkNum(...argArray) {
  // Array
  console.log(toStirng.call(argArray));
  const result = argArray.every( (v) => typeof v === "number");
  console.log(result);
}
const reuslt = checkNum(10 , 2, "55");


