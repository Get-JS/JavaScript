# JS Object

- [JS Object](#js-object)
  - [new 연산자 역할](#new-연산자-역할)
    - [new 생성자 keyword로 함수를 호출시 흐름](#new-생성자-keyword로-함수를-호출시-흐름)
  - [프로퍼티의 속성 및 디스크립터 설정 메서드](#프로퍼티의-속성-및-디스크립터-설정-메서드)
  - [유용한 Object 메소드](#유용한-object-메소드)
  - [class vs function (new)](#class-vs-function-new)
  - [who is this of function(method)?](#who-is-this-of-functionmethod)
    - [function 생성자](#function-생성자)
    - [class 생성자](#class-생성자)
    - [{} 리턴 new vs don't use new keyword](#-리턴-new-vs-dont-use-new-keyword)
  - [arrow function](#arrow-function)
  - [this (\*\*)](#this-)
  - [Reference](#reference)

## new 연산자 역할

```js
// 생성자 함수
function Circle(center, radius) {
  // 생성자 필드 (this is newObject what is binded)
  this.center = center;
  this.radius = radius;
}
// prototype 공간에 추가
Circle.prototype.area = function () {
  return Math.PI * this.radius * this.radius;
};

var circle = new Circle({ x: 0, y: 0 }, 2.0);
```

### new 생성자 keyword로 함수를 호출시 흐름

```js
var newObj = {}; // 새로운 빈 객체 주소 참조
newObj.__proto__ = Cicle.prototype; // prototype 공간 주소 참조
Circle.apply(newObj, arguments); // this bind하여 arguments 정보들로 함수 실행 this bind로 인해, 생성자 필드 정보 부여가 됨
return new Obj(); // 만들어진 객체 리턴
```

## 프로퍼티의 속성 및 디스크립터 설정 메서드

```
  writable (쓰기 가능)
  enumerable (나열 가능)
  configurable (재정의)
```

- 데이터 프로퍼티

  - value
  - writable
  - enumerable
  - configurable

- 접근자 프로퍼티
  - `get`
  - `set`
  - enumerable
  - configurable

> configurable: false는 플래그 값 변경이나 프로퍼티 삭제를 막기 위해 만들어졌지, 프로퍼티 값 변경을 막기 위해 만들어진 게 아닙니다.

```js
Object.getOwnPropertyDescriptor(obj, propertyName); // 디스크립터 (상속 관계 프로퍼티는 undefined)
Object.defineProperty(obj, propertyName, descriptor); // 프로퍼티 디스크립터 설정
Object.defineProperties(obj, descriptor); // 여러 개 프로퍼티 디스크립터 설정
Object.create(obj, descriptor); // 첫 번 째 인수로 상속을 받는다,
// 두 번 째 인수에서는 프로퍼티 디스크립터를 작성하여 자신의 프로퍼티로 갖게 된다. 접근자 __proto__ 프로퍼티는 대상에 포함되지 않는다.
```

## 유용한 Object 메소드

```js
Object.keys(); // method returns an array of a given object's own enumerable property
Object.getOwnProperyNames(); // method returns an array of all properties (including non-enumerable properties except for those which use Symbol)

Object.preventExtensions(); // 추가 [불가]
Object.seal(); // 추가,삭제, 재정의(configuable) [불가]
Object.freeze(); // 재정의,추가,삭제,수정 [불가]
```

## class vs function (new)

- [MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes)
  - Class 정의
  - Class body 와 method 정의
  - extends를 통한 클래스 상속(sub classing)
  - Species
  - super 를 통한 상위 클래스 호출
  - Mix-ins
- [javascript info](https://ko.javascript.info/class)

  - **`클래스 필드`**

  ```js
  class MyClass {
    prop = value; // 프로퍼티

    constructor(...) { // 생성자 메서드
      // ...
    }

    method(...) {} // 메서드

    get something(...) {} // getter 메서드
    set something(...) {} // setter 메서드

    [Symbol.iterator]() {} // 계산된 이름(computed name)을 사용해 만드는 메서드 (심볼)
    // ...
  }
  ```

- [javascript info](https://ko.javascript.info/class-inheritance#ref-69)
  - **`super 키워드와 [[HomeObject]]`**

## who is this of function(method)?

### function 생성자

```js
function A(params) {
  this.name = params.name;
}

A.prototype.what = function () {
  return this.name;
};
A.prototype.who = function () {
  return this;
};
```

```js
var a = new A({ name: "yjkwon07" });
a.what(); // "yjkwon07"
a.who(); // A {name: "yjkwon07"}
```

- method get method of refernceType

```js
var who = a.who();
who(); // global this
```

### class 생성자

```js
class A {
  constructor(params) {
    this.name = params.name;
  }
  what() {
    return this.name;
  }
  who() {
    return this;
  }
}
```

```js
var a = new A({ name: "yjkwon07" });
a.what(); // "yjkwon07"
a.who(); // A {name: "yjkwon07"}
```

- method get method of refernceType
  - 객체 메서드를 여기저기 전달해 전혀 다른 컨텍스트에서 호출하게 되면 this는 원래 객체를 참조하지 않습니다.

```js
var who = a.who();
who(); // undefined => class is use stric mode
```

### {} 리턴 new vs don't use new keyword

```js
function A(params) {
  this.name = params.name;
  function what() {
    return this.name;
  }
  function who() {
    return this;
  }
  return {
    ref: this,
    what,
    who,
  };
}
```

- [new 연산자 역할 참고](#new-연산자-역할)
- return newObj 하기전 apply에서 이미 `{} 리터럴` 리턴 됨
- 객체를 return 한다면, this 대신 객체가 반환
- 원시형을 return 한다면, return문이 무시

```js
var a = new A({ name: "yjkwon07" }); // new obj
a.what(); // undefined
a.who(); // { ref: A, what: ƒ, who: ƒ } => a 객체의 this를 리턴
a.ref; // A { name: 'yjkwon07' } => new 생성자 A를 만들 때의 this를 리턴 * new 생성자 keyword로 함수를 호출시 흐름 참조
a.who() === a.ref; // false
window.name; // undefined
```

- new 생성자 키워드를 사용하지 않았기 때문에 window 전역 객체에 name 프로퍼티가 생성된다.

```js
var a = A({ name: "yjkwon07" }); // new obj
a.what(); // undefined
a.who(); // { ref, what, who } => a 객체의 this를 리턴
a.ref; // 일반호출 하였기 때문에 this는 global 값이 리턴
a.who() === a.ref; // false
window.name; // "yjkwon07"
```

## arrow function

- [화살표 함수](../ES2018/4.화살표%20함수.js)
- [MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/%EC%95%A0%EB%A1%9C%EC%9A%B0_%ED%8E%91%EC%85%98)

  - 화살표 함수 표현(arrow function expression)은 function 표현에 비해 구문이 짧고 자신의 `this`, `arguments`, `super`, `prototype`, `yield` 또는 `new.target`을 **바인딩 하지 않는다.**
  - 화살표 함수는 **항상 익명이다.** 이 함수 표현은 메소드 함수가 아닌 곳에 가장 적합하다. 그래서 **생성자로서 사용할 수 없다.**

> 화살표 함수는 **자신의 this가 없습니다.** 대신 화살표 함수를 둘러싸는 `렉시컬 범위(lexical scope)의 this가 사용됩니다.`
> 화살표 함수는 일반 변수 조회 규칙(normal variable lookup rules)을 따릅니다. 때문에 **현재 범위에서 존재하지 않는 this를 찾을 때**, 화살표 함수는 `바로 바깥 범위에서` `this를` 찾는것으로 검색을 끝내게 됩니다.

## this (\*\*)

- arrow function은 this를 EC에서 생성된 binding된 this를 갖게 된다.

```js
class A {
  whoMethod() {
    console.log("whoMethod", this);
  }
  whoarrow = () => {
    // 멤버 변수
    console.log("whoarrow ", this);
  };
}

const classA = new A();
classA.whoMethod(); // classA
classA.whoarrow(); // classA

const aMethod = classA.whoMethod;
aMethod(); // undefined
const aarrow = classA.whoarrow;
aarrow(); // classA
```

```js
function A() {}
A.prototype.whoFunction = function () {
  console.log("whoFunction", this);
};
A.prototype.whoarrow = () => {
  console.log("whoarrow ", this);
};

const functionA = new A();
functionA.whoFunction(); // functionA
functionA.whoarrow(); // global

const aMethod = functionA.whoFunction;
aMethod(); // global
const aarrow = functionA.whoarrow;
aarrow(); // global
```

```js
function A() {
  function whoFunction() {
    console.log("whoFunction", this);
  }
  const whoarrow = () => {
    console.log("whoarrow ", this);
  };
  return {
    whoFunction,
    whoarrow,
  };
}

const functionA = new A();
functionA.whoFunction(); // {}
functionA.whoarrow(); // A

const aFunction = functionA.whoFunction;
aFunction(); // global
const aarrow = functionA.whoarrow;
aarrow(); // A
```

```js
function A() {
  function whoFunction() {
    console.log("whoFunction", this);
  }
  const whoarrow = () => {
    console.log("whoarrow ", this);
  };
  return {
    whoFunction,
    whoarrow,
  };
}

const functionA = A();
functionA.whoFunction(); // {}
functionA.whoarrow(); // global

const aFunction = functionA.whoFunction;
aFunction(); // global
const aarrow = functionA.whoarrow;
aarrow(); // global
```

```js
const ObjectA = {
  whoFunction: function () {
    console.log("whoFunction", this);
  },
  whoMethod() {
    console.log("whoMethod", this);
  },
  whoarrow: () => {
    console.log("whoarrow ", this);
  },
};

ObjectA.whoFunction(); // ObjectA
ObjectA.whoMethod(); // ObjectA
ObjectA.whoarrow(); // global

const ObjectAFunction = ObjectA.whoFunction;
ObjectAFunction(); // global
const ObjectAMethod = ObjectA.whoMethod;
ObjectAMethod(); // global
const ObjectAarrow = ObjectA.whoarrow;
ObjectAarrow(); // global
```

## Reference

- [프로퍼티 플래그와 설명자](https://ko.javascript.info/property-descriptors)
- [프로퍼티 getter와 setter](https://ko.javascript.info/property-accessors)
