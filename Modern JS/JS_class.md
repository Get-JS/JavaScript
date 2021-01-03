# JS_class

- [JS_class](#js_class)
  - [class](#class)
  - [상속](#상속)
  - [super 키워드와 \[[HomeObject]\]](#super-키워드와-homeobject)
  - [instanceof](#instanceof)
  - [Reference](#reference)

## class

```js
class MyClass {
  prop = value; // (클래스 필드) 프로퍼티 [public]
  #prop = value; // (클래스 필드) 프로퍼티 [private]

  constructor(...) { // 생성자 메서드
    // ... 인스턴스 프로퍼티 정의
  }

  method(...) {} // 메서드
  * method(...) {} // 제너레이터 메서드

  get something(...) {} // getter 메서드


  set something(...) {} // setter 메서드

  [Symbol.iterator]() {} // 계산된 이름(computed name)을 사용해 만드는 메서드 (심볼)

  static displayName = ""; // 정적 클래스 프로퍼티

  static distance(a, b) { // 정적 클래스 메서드
    this // class MyClass
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}
```

- `클래스 필드`

  - 어떤 종류의 프로퍼티도 클래스에 추가할 수 있다.
  - 생성자.prototype이 아닌 개별 객체에만 클래스 필드가 설정된다.
  - 즉, 생성자 역할을 다 한 이후에 클래스 필드가 처리된다.

- `method(...) {}` 표현은

  - 메서드는 생성자로 사용할 수 없다. 즉 prototype 프로퍼티를 가지지 않으므로 new 연산자로 인스턴스를 생성할 수 없다.
  - 객체 표현에서도 동일하다.

## 상속

> 자바스크립트는 `'상속 클래스의 생성자 함수(derived constructor)'와` 그렇지 않은 생성자 함수를 구분합니다.
> 상속 클래스의 생성자 함수엔 특수 내부 프로퍼티인 `[[ConstructorKind]]:"derived"가` 이름표처럼 붙습니다.

> 일반 클래스가 `new와` 함께 실행되면, 빈 객체가 만들어지고 `this에` 이 객체를 할당합니다.
> 반면, 상속 클래스의 생성자 함수가 실행되면, 일반 클래스에서 일어난 일이 일어나지 않습니다.
> 상속 클래스의 생성자 함수는 빈 객체를 만들고 `this에` 이 객체를 할당하는 일을 부모 클래스의 생성자가 처리해주길 기대합니다.

> 이런 차이 때문에 상속 클래스의 생성자에선 `super를` 호출해 부모 생성자를 실행해 주어야 합니다. 그렇지 않으면 `this가` 될 객체가 만들어지지 않아 에러가 발생합니다.

- **클래스 필드 초기화 순서**

  - `아무것도 상속받지 않는 베이스 클래스는` 생성자 실행 이전에 초기화된다.
  - `부모 클래스가 있는 경우엔` `super()` 실행 직후에 초기화 된다.

- **클래스 생성자의 상속 관계**

  - class B extends A는 `클래스 B의` 프로토타입이(\_\_proto\_\_) `클래스 A를` 가리키게 한다.
  - (B.[[Prototype]] = A). 따라서 B에서 원하는 프로퍼티나 메서드를 찾지 못하면 A로 검색이 이어진다.
  - `class` 키워드에서만 이루어지고 `일반 함수의` 생성자 프로토타입 상속은 일반 함수 prototype의 상속관계만 이루어진다. 함수의 생성자의 \_\_proto\_\_은 Function 프로토타입을 가리킨다.

## super 키워드와 \[[HomeObject]\]

- 클래스이거나 객체 메서드인 함수의 \[[HomeObject]] 프로퍼티는 해당 객체가 저장된다.
- `super는` \[[HomeObject]]를 이용해 부모 프로토타입과 메서드를 찾는다.
- \[[HomeObject]]는 오직 `super 내부에서만` 유효하다.

> \[[HomeObject]]는 클래스와 일반 객체의 메서드에서 정의됩니다.
> 그런데 객체 메서드의 경우 \[[HomeObject]]가 제대로 동작하게 하려면 메서드를 반드시 method() 형태로 정의해야 합니다.
> "method: function()" 형태로 정의하면 안 됩니다.

## instanceof

```js
class Animal {}
class Rabbit extends Animal {}

let rabbit = new Rabbit();
alert(rabbit instanceof Animal); // true

// rabbit.__proto__ === Rabbit.prototype
// rabbit.__proto__.__proto__ === Animal.prototype (일치!)
```

> 한편, objA가 objB의 프로토타입 체인 상 어딘가에 있으면 true를 반환해주는 메서드, `objA.isPrototypeOf(objB)도` 있습니다.
> `obj instanceof Class는` `Class.prototype.isPrototypeOf(obj)와` 동일합니다.
> 검사 시, 프로토타입 체인과 Class.prototype만 고려합니다.
> `instanceof는` `평가 시`, 함수는 고려하지 않고 평가 대상의 prototype을 고려합니다.
> 평가 대상의 prototype이 프로토타입 체인 상에 있는 프로토타입과 일치하는지 여부를 고려하죠.

## Reference

- [클래스와 기본 문법](https://ko.javascript.info/class)
- [클래스 상속](https://ko.javascript.info/class-inheritance)
- [정적 메서드와 정적 프로퍼티](https://ko.javascript.info/static-properties-methods)
- [private, protected 프로퍼티와 메서드](https://ko.javascript.info/private-protected-properties-methods)
- [내장 클래스 확장하기](https://ko.javascript.info/extend-natives)
- ['instanceof'로 클래스 확인하기](https://ko.javascript.info/instanceof)
- [믹스인](https://ko.javascript.info/mixins)
