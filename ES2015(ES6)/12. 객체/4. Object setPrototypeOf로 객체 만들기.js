// Object setPrototypeOf로 객체만들기
// Object.assign과 유사 
// 객체 안에 값을 변형을 시켜서 새로운 객체를 만들지만
// setprototype은 prototype객체에만 추가하는 것이라 명확하고 단순한 객체이다.
const healthObj = {
    showHealth : function() {
        console.log("오늘 운동시간 : " + this.healthTime);
    },
     setHealth : function(newTime) {
        this.healthTime = newTime;
     }
}
const myHealth = {
    name : "crong",
    lastTime : "11:20"
};

console.log(myHealth , healthObj);

// Object.create를 안쓰고 편하게 쓴다.
const newobj = Object.setPrototypeOf({
    name: "crong",
    lastTime: "11:20"
}, HealthObj);
console.log(newobj);