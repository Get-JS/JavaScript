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
// [object Function]
console.log(toSTring.call(Health));