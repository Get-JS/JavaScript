// Function default paramaters

// 기본 매개변수
// parameter 부분에서 미리 설정 가능
function sum(value , size = {value : 1}) {
    // size = size || 1;
    return value * size.value;
}
console.log(sum(3, 10)); // 30
console.log(sum(3, {value : 3})); // 9
console.log(sum(3)); // 3