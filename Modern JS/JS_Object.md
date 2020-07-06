# JS Object

- [JS Object](#js-object)
  - [new 연산자 역할](#new-연산자-역할)
  - [프로퍼티의 속성](#프로퍼티의-속성)
  - [유용한 Object 메소드](#유용한-object-메소드)
  - [class vs function (new)](#class-vs-function-new)
  - [this of function(method)?](#this-of-functionmethod)
    - [function 생성자](#function-생성자)
    - [class 생성자](#class-생성자)
    - [{} 리턴](#-리턴)
  - [allow function](#allow-function)

## new 연산자 역할

```js
  function Circle(center, radius) {
    this.center = center;
    this.radius = radius;
  }
  Circle.prototype.area = function() {
    return Math.PI*this.radius*this.radius;
  }
```

- new 생성자 keyword로 함수를 호출시 흐름

```js
  var circle = new Circle({x:0,y:0},2.0);

  var newObj = {};
  newObj.__proto__ = Cicle.prototype;
  Circle.apply(newObj, arguments);
  return new Obj;
```

## 프로퍼티의 속성

```
  writable
  enumerable
  configurable
```

- 데이터 프로퍼티
  - value
  - writable
  - enumerable
  - configurable 

- 접근자 프로퍼티
  - get
  - set
  - enumerable
  - configurable

```js
  Object.getOwnPropertyDescriptor(obj, propertyName) // 디스크립터 (상속 관계 프로퍼티는 undefined)
  Object.defineProperty(obj, propertyName, descriptor) // 프로퍼티 디스크립터 설정
  Object.defineProperties(obj, descriptor) // 여러 개 프로퍼티 디스크립터 설정
  Object.create(obj, descriptor) // 첫 번 째 해당 인수로 상속을 받는다, 두 번 째 인수에서는 프로퍼티 디스크립터를 작성하여 자신의 프로퍼티로 갖게 된다.
```

## 유용한 Object 메소드

```js
  Object.keys // method returns an array of a given object's own enumerable property 
  Object.getOwnProperyNames // method returns an array of all properties (including non-enumerable properties except for those which use Symbol) 

  Object.preventExtensions // 추가 [불가]
  Object.seal // 추가,삭제, 재정의(configuable) [불가]
  Object.freeze // 재정의,추가,삭제,수정 [불가]
```

## class vs function (new)

- [MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes)
  - Class 정의
  - Class body 와 method 정의
  - extends를 통한 클래스 상속(sub classing)
  - Species
  - super 를 통한 상위 클래스 호출
  - Mix-ins

## this of function(method)?

### function 생성자

```js
 function A(params) {
    this.name = params.name;
  }

  A.prototype.what = function () {
    return this.name;
  }
  A.prototype.who = function () {
    return this;
  }
```

```js
  var a = new A({name:"yjkwon07"});
  a.what() // "yjkwon07"
  a.who() // A {name: "yjkwon07"}
```

- method get method of refernceType

```js
  var who = a.who()
  who() // global this
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
  var a = new A({name:"yjkwon07"});
  a.what() // "yjkwon07"
  a.who() // A {name: "yjkwon07"}
```

- method get method of refernceType

```js
  var who = a.who()
  who() // undefined => class is use stric mode
```

### {} 리턴

```js
  function A(params) {
    this.name = params.name;
    function what() {
      return this.name;
    }
    function who(){
      return this;
    }
    return {
      what,
      who
    }
  } 
```

- [new 연산자 역할 참고](#new-연산자-역할)
- return newObj 하기전 apply에서 이미 `{} 리터럴` 리턴 됨

```js
  var a = new A({name:"yjkwon07"});
  a.what() // undefined
  a.who() // { what, who }
```

- new 생성자 키워드를 사용하지 않았기 때문에 window 전역 객체에 name 프로퍼티가 생성된다.

```js
  var a = A({name:"yjkwon07"});
  a.what() // undefined
  a.who() // { what, who }
  window.name // "yjkwon07"
```

## allow function

- [화살표 함수](../ES2018/4.화살표%20함수.js)
- [MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/%EC%95%A0%EB%A1%9C%EC%9A%B0_%ED%8E%91%EC%85%98)
  - 화살표 함수 표현(arrow function expression)은 function 표현에 비해 구문이 짧고  자신의 this, arguments, super 또는 new.target을 바인딩 하지 않는다. 
  - 화살표 함수는 항상 익명이다. 이  함수 표현은 메소드 함수가 아닌 곳에 가장 적합하다. 그래서 생성자로서 사용할 수 없다.