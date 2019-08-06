 // 1.const 특성
 function whatIsHome() {
    const list = ["apple", "orange" , "watermelon"];
    list.push("bananaa");
    // 추가가 됨....
    // const를 사용하더라도 배열과 오브젝트의 값을 변경하는 것은 가능하다.
    // 절대 불변이 아니다.
    // 일종의 값을 재할당하는 코드만 불가능하다.(주소)
}

/* 
    2.immutable array
    ***immutable array를 어떻게 만들지?
    뒤로가기, 앞으로가기 데이터를 저장해서 보여주어야 하는 상황.
    array는 참조하는 값이 바뀜..
    이전의 데이터를 알 수 없다.
    So immutable(불변)
*/
// 불변의 array!!!
// list를 그대로 보관 바뀜이 없음
const list = ["apple", "orange", "watermelon"];
// 새로운 배열
list2 = [].concat(list, "banana");
// false
// 증명
console.log(list === list2);