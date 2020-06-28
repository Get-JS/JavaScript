// spread operator - 몇가지 활용
let pre = [100, 200, "hello", null];

// 배열을 특정 위치에 끼워넣을 때 활용
let newData = [0, 1, 2, 3, ...pre, 4];
console.log(newData);
// [0, 1, 2, 3, 100, 200, "hello", null, 4]

function sum(a, b, c) {
    return a + b + c;
}

let pre2 = [100 ,200 ,300];
// 너무 귀찮아.
sum(pre2[0] , pre2[1] , pre2[2]);

// 1 sol. 이전 방법
sum.apply(null, pre2);
// out: 600

// 2. spread operator 
// -> immutahle array 
//즉, 배열을 바꾸지 않고 새로운 값을 복사할 수 있는 방법을 제공
//  배열을 merge하거나 spread하는방법으로 
// 배열을 합치거나 펼쳐진 상태로 새로운 인자값으로 전달할 수 있는 기능
sum(...pre2);

console.log(sum.apply(null, pre2));
console.log("result =>", sum(...pre2));