// Object assign으로 JS객체 만들기

// Object assign 메서드
// ES5
// new 말고 순수한 Object를 만들 수 없냐?
const HealthObj = {
    showHealth : function() {
        console.log("오늘운동시간 : "+ this.HealthTime);
    },

    setHealth : function(newTime) {
        this.HealthTime = newTime;
    }
}

// 표준적인 Object Create
const myHealth = Object.create(HealthObj);
// myhealth가 일반 오브젝트 안에 같이 포함된게 아니고
// 프로토타입  객체 안에 들어간것이다.

// 우리가 new 키워드를 사용하여 함수를 만들고 
// 생성자 안에다 프로토타입 설정하는것이 간편해짐 -> Object.create
// 객체를 만드는 가장 표준적인 방법이라고 생각한다.

// 오븍젝트에 변수값을 넣어 줄 때는 
// 하나 하나 넣어야 하는 귀찮음
myHealth.HealthTime = "11:20";
myHealth.name = "crong";
console.log(myHealth);

// 어떤 클래스의 이 객체의 필요한 속성값을 기입하고 프로토타입 객체에 
// 넣을것이 많다면 밖으로 묶어두고 추가하기 
// 대신에 Object.create로 객체프로타입으로 들어갈 수 있게 선언
// Object.assign은 Immtuable 객체 즉, 새로운 객체를 만들 때 선언
const myHealth = Object.assign(Object.create(HealthObj), {
    name : "crong",
    lastTime : "11:20"
});
console.log(myHealth);

