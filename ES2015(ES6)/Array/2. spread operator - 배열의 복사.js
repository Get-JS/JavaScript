//spread operator, 펼침연산자
let pre = ["apple", "orange", 100];
let newData = [...pre];

console.log(pre, newData);
// ["apple", "orange", 100]
// ["apple", "orange", 100]

// But!! false 다른 데이터 !!! 
console.log(pre === newData);
// immutable ~~~ 
// 메모리의 새로운 공간에 새로운 데이터를 넣어 참조
// 완전히 복사 


