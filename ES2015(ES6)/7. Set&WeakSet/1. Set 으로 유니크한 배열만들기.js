// Set으로 유니크한 배열만들기
let mySet = new Set();
// 'object' Set
console.log(toString.call(mySet));
// set: 중복없이 유일한 값을 저장하려고 할때.
// 이미 존재하는지 체크할 때 유용.
// set도 사실 배열과 유사함

mySet.add("crong");
mySet.add("hary");
mySet.add("crong");

// 존재 하는지?
// has : 가지고 있는지
console.log(mySet.has("crong"));
// 순회
mySet.forEach(function(v) {
    console.log(v);
});
// delete : value삭제
mySet.delete("crong");
// 순회
console.log("after, delete : ");
mySet.forEach(function(v) {
    console.log(v);
});