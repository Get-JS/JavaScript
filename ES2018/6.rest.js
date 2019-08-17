//(...변수)는 rest로 여러 개의 변수를 모아서 배열로 만든다.

const array = ['nodejs', {}, 10, true];
const [node, obj, ...bool] = array;

console.log(bool); // [10, true]

const m = (x, y) => console.log(x, y);
m(5, 6) // 5 6 

m(5, 6, 7, 8, 9); // 5 6

const n = (X, ...y) => console.log(x, y);

n(5, 6, 7, 8,  9) // (4) [5, 6, ,7, 8, 9]

function o() {
    console.log(arguments);
}
o(1, 2, 3, 4, 5) // [1 2,3,4,5];

// 더이상 arguement를 사용하지 않는다.
const p = (...rest) => console.log(rest);
p(5, 6, 7, 8, 9) // [5, 6, 7, ,8 ,9 ]

