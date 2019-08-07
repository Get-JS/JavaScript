// Object setPrototypeOf로 객체간 prototype chain 생성하기 
// prototype 특성 그대로 이해하는 필요가 있다.

// parent 
const healthObj = {
    showHealth : function() {
        console.log("오늘 운동시간 : " + this.HealthTime);
    },

    setHealth : function(newTime) {
        this.HealthTime = newTime;
    }
}

// child obj
const healthChildObj = {
    getAge : function() {
        return this.age;
    }
}
// 1. 이미 구성된 다른 객체를 사용하고 싶다. 
// 합쳐야 할까? 
// sol. JS에서 prototype chain으로 사용한다.
// const lastHealthObj = Object.setPrototypeOf(healthChildObj , healthObj);
Object.setPrototypeOf(healthChildObj , healthObj);

const childObj = Object.setPrototypeOf( {
    age : 22
}, healthChildObj);
console.log("childObj is", childObj);

// 부모에 있는 메서드들을 출력
childObj.setHealth("11:55");
childObj.showHealth();
// 이미 만들어진 객체 매서드들을 사용 (일종의 상속)
