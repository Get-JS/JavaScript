// Arrow Function

// 콜백 함수 -> 나중에 실행되는 함수
setTimeout(function() {
    console.log("settimout");
}, 1000);

// 축약 표현  
setTimeout( () => {
    console.log("settimeout arrow");
} , 1000);

// callback 함수의 문제가 함수의 인자가 너무 길어...
let newArr = [1, 2, 3, 4, 5].map(function(value , index, object) {
    return value * 2;
});

console.log(newArr);

// 더 축약 
// return도 생략
// brace를 가급적 해주는게 좋다 
let newArr = [1, 2, 3, 4, 5].map( (v) => (v * 2) );
console.log("arrow newArr", newArr);
