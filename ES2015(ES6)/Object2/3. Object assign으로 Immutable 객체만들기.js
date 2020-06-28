// Object assign으로 Immutable 객체 만들기 
const HealthObj = {
    showHealth : function() {
        console.log("오늘운동시간 : "+ this.HealthTime);
    },

    setHealth : function(newTime) {
        this.HealthTime = newTime;
    }
}

const previousObj = {
    name : "crong",
    lastTime : "11:20"
};
// 현재는 프로토타입 객체가 필요 없으므로 빈 오브젝트로 만든다.
/// Object.assing은 이전객체의 값을 쓸 수 있다.
// 새로운 객체값을 쓸 수 있다.

// 이전의 값을 세팅 하고 새로운 값이 들어 오게 된다면 
// 새로운 값으로 기입 
const myHealth = Object.assign({}, previousObj, {
    "name" : "honux",
    "age" : 99
});

// false
console.log(previousObj === myHealth);

// 만약에 아무것도 기입 하지 않는다면?
const myHealth = Object.assign({}, previousObj, {});
// false
// 속성값은 같지만 주소는 다르다
// 객체를 쓸 때 새로운 객체로 Immutable로 반환!!!!
console.log(previousObj === myHealth);