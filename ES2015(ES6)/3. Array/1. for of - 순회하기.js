// for of - 순회하기
var data = [1, 2, undefined, NaN, null, ""];
for (var i = 0; i < data.length; i++) {
    console.log(i);
}

data.forEach(function (value) {
    console.log("valueis", vlaue);
});

// bad............
for (let idx in data) {
    console.log(data[idx]);
}

// for - in 의 문제점(Array)
// Objeect도 순회한다. array도 일종의 Object
// 자신이 갖고 있지 않은 상위의 값도 포함해서 결과에 출력할 수 있다.
var data = [1, 2, undefined, NaN, null, ""];
Array.prototype.getIndex = function () { };
// 출력시 function(){} 출력

// So!!! for - of
for(let value of data) {
    console.log(value);
}

// 배열 뿐만 아니라 문자열도
// 문자 단위로 출력 (공백도 포함)
var str = "hello world!!!";
for(let value of str) {
    console.log(value);
}
