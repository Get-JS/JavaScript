// class를 통한 객체생성
// ES6 Class
// Javascript는 Class가 존재 하지 않지만 
// ES6에 키워드가 생겼다.

function Health(name) {
    this.name = name;
}

// Health안에 있는 내부 객체에 사용
Health.prototype.showHealth = function() {
    console.log(this.name + "님 안녕하세요");
}
// 효울적인 객체를 프로토타입 안에 두면서
// 객체를 제너레이터 해준다. 
// new 키워드를 사용하면서 this라는 context에 여러가지 
// prototype 하위에 있는 메소드들, 속성들, this에 추가한 것을 묶어서 할당한다.
const h = new Health("crong");
h.showHealth();

// 가독성면에서는 좋다.
// 모습만 class -> function이다.
class Health {
    constructor(name , lastTime) {
        this.name = name;
        this.lastTime = lastTime;
    }
    // Health도 내부적으로 function로 처리
    // showHealth도 prototype으로 처리
    showHealth() {
        console.log("안녕하세요" + this.name);
    }
}

const myHealth = new Health("crong");
myHealth.showHealth();
// prototype 존재 확인
// prototype 객체 안에 보완되는 값
console.log(myHealth);
// type check 
// Function!!!!
console.log(toSTring.call(Health));


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
// const myHealth = Object.create(HealthObj);
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

// Object assign으로 Immutable 객체 만들기 
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


// Object setPrototypeOf로 객체만들기
// Object.assign과 유사 
// 객체 안에 값을 변형을 시켜서 새로운 객체를 만들지만
// setprototype은 prototype객체에만 추가하는 것이라 명확하고 단순한 객체이다.
console.log("myhealth is ", myHealth);

// Object.create를 안쓰고 편하게 쓴다.
const newobj = Object.setPrototypeOf({
    name : "crong", 
    lastTime : "11:20"
    }, HealthObj);
console.log(newobj);

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

const childObj = Object.setPrototypeOf( {
    age : 22
}, healthChildObj);
console.log("childObj is", childObj);

// 이미 구성된 다른 객체를 사용하고 싶다. 
// 합쳐야 할까? 
// JS에서 prototype chain으로 사용한다.
// const lastHealthObj = Object.setPrototypeOf(healthChildObj , healthObj);
Object.setPrototypeOf(healthChildObj , healthObj);
// 부모에 있는 메서드들을 출력
childObj.setHealth("11:55");
childObj.showHealth();
// 이미 만들어진 객체 매서드들을 사용 
