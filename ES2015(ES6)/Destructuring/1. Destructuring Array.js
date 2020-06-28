//Destructuring Array
// 필요한 배열에 특정 인덱스값이 의미가 있을 때 뽑아서 쓸 수 있다.

let data = ["crong", "honux", "jk", "jinny"];
// let jisu = data[0];
// let jung = data[2];

// 2.
// 변수에 배열이나 오브젝트에 값을 할당할 때 유용함
let [jisu, ,jung] = data;
console.log(jisu, jung);
