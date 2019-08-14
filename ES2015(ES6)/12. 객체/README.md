# 객체
## 1. class를 통한 객체생성

### ES6 Class

__Javascript는 Class가 `존재 하지 않지만`__

ES6에 `키워드가 생겼다.`

```javascript
    function Health(name) {
        this.name = name;
    }

    // Health안에 있는 내부 객체에 사용
    Health.prototype.showHealth = function() {
        console.log(this.name + "님 안녕하세요");
    }

    const h = new Health("yjkwon07");
    h.showHealth();
```
__효울적인 객체를 프로토타입 안에 두면서 `객체를 제너레이터 해준다.`__

`new 키워드를` 사용하면서 this라는 context에 여러가지 prototype 하위에 있는 

메소드, 속성, this에 추가한 것을 묶어서 할당한다.

### class
가독성면에서는 좋다.

__모습만 class -> function이다.__

```javascript
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

    const myHealth = new Health("yjkwon07");
    myHealth.showHealth();

    // prototype 존재 확인
    // prototype 객체 안에 보완되는 값
    console.log(myHealth);

    // type check 
    // Function!!!!
    // [object Function]
    console.log(toString.call(Health));
```

## 2. Object assign으로 JS객체 만들기

### Object.create()

__ES5__

__`new 말고` 순수한 Object를 만들 수 없을까?__
```javascript
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

    myHealth.HealthTime = "11:20";
    myHealth.name = "yjkwon07";
    console.log(myHealth);
```
__HealthObj가 myHealth에 일반 오브젝트 안에 같이 포함된게 아니고 `프로토타입 객체 안에 들어간것이다.`__

우리가 new 키워드를 사용하여 함수를 만들고 생성자 안에 프로토타입 설정하는것이 간편해짐 -> `Object.create`

__객체를 만드는 가장 표준적인 방법이라고 생각한다.__

__오브젝트에 `변수값을 넣어 줄 때는 하나 하나 넣어야 하는` 귀찮음__

어떤 클래스의 이 객체의 필요한 속성값을 기입하고 프로토타입 객체에 넣을것이 많다면 밖으로 묶어두고 추가하기 대신에 

Object.create로 객체프로타입으로 들어갈 수 있게 선언

### Object.assign()
__Object.assign은 Immtuable 객체 즉, 새로운 객체를 만들 때 선언__

```javascript
    const myHealth = Object.assign(Object.create(HealthObj), {
        name : "yjkwon07",
        lastTime : "11:20"
    });
    console.log(myHealth);
```

## 3. Object assign으로 Immutable 객체 만들기 

```javascript
    const HealthObj = {
        showHealth : function() {
            console.log("오늘운동시간 : "+ this.HealthTime);
        },

        setHealth : function(newTime) {
            this.HealthTime = newTime;
        }
    }

    const previousObj = {
        name : "yjkwon07",
        lastTime : "11:20"
    };

    const myHealth = Object.assign({}, previousObj, {
        "name" : "honux",
        "age" : 99
    });

    console.log(previousObj === myHealth); // out: false
```
현재는 프로토타입 객체가 필요 없으므로 __빈 오브젝트로 만든다.__

__`Object.assing은` 이전 객체의 값을 쓸 수 있다.__

__이전의 값을 세팅 하고 새로운 값이 들어 오게 된다면 새로운 값으로 기입__

__만약에 아무것도 기입 하지 않는다면?__
```javascript
    const previousObj = {
        name : "yjkwon07",
        lastTime : "11:20"
    };

    const myHealth = Object.assign({}, previousObj, {});

    console.log(previousObj === myHealth); // out: false
```
__속성값은 같지만 주소는 다르다.__

객체를 쓸 때 새로운 객체로 `Immutable로 반환!!!!`

### assign 주의~!
__Object.create()를 사용하지 않았을 때__

test의 객체에도 영향을 받는다.

또한 testCreate의 prototype은 Object이다.

__test가 testCreate에 일반 오브젝트 안에 같이 포함된것이다.__
```javascript
    const test = {
        sc : () => {
            console.log(test);
        },
        gc : () => {
            console.log(this.name);
        }
    }

    const testCreate = Object.assign(test, {
        name : "yjkwon07",
        age : 26
    }); 
```

__Object.create()를 사용했을 때__

test의 객체에는 아무런 영향을 안받는다.

testCreate에는 test객체를 prototype으로 상속 받는다. 

__test가 testCreate에 일반 오브젝트 안에 같이 포함된게 아니고 `프로토타입 객체 안에 들어간것이다.`__
```javascript
    const test = {
        sc : () => {
            console.log(test);
        },
        gc : () => {
            console.log(this.name);
        }
    }

    const testCreate = Object.asgin(Object.create(test), {
        name = "yjkjwon07",
        age = 26
    })
```

## 4. Object setPrototypeOf로 객체만들기

__Object.assign과 유사__

객체 안에 값을 변형을 시켜서 새로운 객체를 만들지만

__`setprototype은 prototype객체에만 추가하는 것이라` 명확하고 단순한 객체이다.__

```javascript
    const healthObj = {
        showHealth : function() {
            console.log("오늘 운동시간 : " + this.healthTime);
        },
        setHealth : function(newTime) {
            this.healthTime = newTime;
        }
    }

    const myHealth = {
        name : "yjkwon07",
        lastTime : "11:20"
    };

    console.log("myHealth is", healthObj);
```

### setPrototypeOf
__Object.create를 안쓰고 편하게 쓸 수 있다.__

```javascript
    const HealthObj = {
        showHealth : function() {
            console.log("오늘 운동시간 : " + this.healthTime);
        },
        setHealth : function(newTime) {
            this.healthTime = newTime;
        }
    }

    const newobj = Object.setPrototypeOf({
        name: "yjkwon07",
        lastTime: "11:20"
    }, HealthObj);
    console.log(newobj);
```

## 5. Object setPrototypeOf로 객체간 prototype chain 생성하기 

prototype 특성 그대로 이해하는 필요가 있다.

### 1. 이미 구성된 다른 객체를 사용하고 싶다.(상속) 

합쳐야 할까? 

__setPrototypeOf!!__

```javascript
    // parent 
    const HealthObj = {
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

    const lastHealthObj = Object.setPrototypeOf(healthChildObj , HealthObj);

    Object.setPrototypeOf(healthChildObj , HealthObj);
```
__sol. JS에서 prototype chain으로 사용한다.__

이미 만들어진 객체 매서드들을 사용 (일종의 상속)

__setPrototypOf도 그러한 효과가 있다.__

```javascript
    const childObj = Object.setPrototypeOf( {
        age : 22
    }, healthChildObj);
    console.log("childObj is", childObj);

    // 부모에 있는 메서드들을 출력
    childObj.setHealth("11:55");
    childObj.showHealth();
```