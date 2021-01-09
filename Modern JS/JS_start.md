# JavaScript Start

- [JavaScript Start](#javascript-start)
  - [1. Spec](#1-spec)
  - [2. Expressions vs Statement](#2-expressions-vs-statement)
    - [2-1. literal](#2-1-literal)
  - [3. Data type](#3-data-type)
    - [3-1. typeof 연산자의 반환 값](#3-1-typeof-연산자의-반환-값)
    - [3-2. 산술 연산](#3-2-산술-연산)
    - [3-3. {} block statements VS object literal](#3-3--block-statements-vs-object-literal)
    - [3-4. ==, === 비교](#3-4---비교)
  - [4. function](#4-function)
  - [5. object(instance)](#5-objectinstance)
    - [5-1. 생성자](#5-1-생성자)
    - [5-2. this](#5-2-this)
  - [6. array](#6-array)
  - [Reference](#reference)

## 1. Spec

1. 인터프리터 언어

   - **JIT 컴파일러가** 내장되어 실행속도가 빨라짐

2. 동적 프로토타입 기반 객체 지향 언어

   - JAVA, C++ 에서, 프로그램 실행 중 클래스를 인스턴스화 하여 나온 객체들은 메서드 혹은 상속을 수정할 수 없지만,
   - JS에서는 `Descriptor에` 따라 `동적으로` 프로토타입, 프로퍼티와 메서드를 **추가, 변경, 삭제 모두 할 수 있다.**

3. 동적 타입 언어

   - **특정 변수 타입이 없다.**
   - const, let, var

4. 일급 객체 함수

   - **함수(fucntion)도 객체로 지정(Funciton)**
   - 즉, 값으로 평가한다.

5. 클로저 지원
   - 내장 함수(Nested Function)를 지원 하여 **하나의 인스턴스화, 은닉이 가능**

## 2. Expressions vs Statement

- 표현식(Expressions)

  - 표현식은 값 하나로 귀결되는 JS 코드 조각(snippet) 이다.

  ```js
  2 + (2 * 3) / 2(Math.random() * (100 - 20)) + 20;

  functionCall();

  window.history ? useHistory() : noHistoryFallback();

  1 + 1, 2 + 2, 3 + 3;

  declaredVariable;

  true && functionCall();

  true && declaredVariable;
  ```

- 문장(Statements)
  - 단어가 저절히 조합된 한 문장으로 `의사를` 표현한다.
  - 문장 여러 개를 `{}`로 감싼 코드를 복합문 또는 블록문이라고 한다.
  - 문장은 값이 들어와야 할 곳에 들어갈 수 없다. (in JS)
  - 함수의 인자로도, 대입 연산의 값으로도, 연산자의 피연산자로도 사용될 수 없다.
  ```js
    1. if
    2. if-else
    3. while
    4. do-while
    5. for
    6. switch
    7. for-in
    8. with (deprecated)
    9. debugger
    10. variable declaration
  ```

### 2-1. literal

- 프로그램에서 직접 작성할 수 있는 상수 값은 `리터럴이라고` 한다.
  - 정수 리터럴 => 123, 0x2a, 0o73, 0b101
  - 부동소수점 리터럴 => 3.14, 6.02e23
  - 문자열 리터럴 => "문자열 리터럴"
  - 템플릿 리터럴 => \`${변수} aa\`
  - 객체 리터럴 => { propertyName : 1 }
  - 함수 리터럴 => var a = function(x) { return x };

## 3. Data type

- 원시타입 **(Primitive Type)**: 자바스크립트에서 객체가 **(Reference Type)** 아닌 것들이며 값 그 자체로 저장된다.
  - `Primitive types are immutable`
  - String, Number, Boolean 같은 경우 객체가 존재 하지만, 원시타입의 리터럴로 정의하여 프로퍼티를 사용할경우 **Wrapper Object**로 자동 변환 되어 프로퍼티를 리턴한다. **(Auto Boxing)**
    ```js
      1.toString(); // "1"
      new Number(1).toString(); // Wrapper Object 리턴후 property 값 리턴 내부에서 이루어진 평가이기 때문에 GC로 없어짐
    ```
    - 연산 이후, GC로 해당 Wrapper Object 삭제 (할당이 되어이 있지 않기 때문에)
    ```js
    "string".newProperty = 1; // no error
    console.log("string".newProperty); // undefined
    ```
  - 하지만, `new 연산자로` 객체를 만들경우 Reference Type Objcet로 리턴되어 나와 **Primitive Type을 잃게 된다.**
    - (원시 값을 갖고 싶으면, new String("값").valueOf() 사용 해야한다.)
- Boolean
- Null
  - 산술 연산자에서는 '0'으로 평가
- Undefined
  - 산술 연산자에서는 'NaN'으로 평가
- Number (IEEE754로 규정된 64-bit 부동소수점, 자바스크립트에는 정수 타입은 존재하지 않다.)
  - 부호(1 bit), 지수(11 bit), 가수(52 bit)
- String
  - '+' 연산 외 '\*,/,%...' 연산자는 String 타입을 Number(String 타입)으로 연산을 하게된다.
- Symbol (ECMAScript 6에 추가됨)

### 3-1. typeof 연산자의 반환 값

- | data             | ex                                        | return      |
  | :--------------- | :---------------------------------------- | :---------- |
  | 숫자, NaN        | 12,NaN, Number(12)                        | "number"    |
  | 문자열           | "값", String("값")                        | "string"    |
  | 논리값           | true, false                               | "boolean"   |
  | 정의되지 않은 값 | undefined                                 | "undefined" |
  | null 값          | null                                      | "object"    |
  | 심벌             | Symbol("값")                              | "symbol"    |
  | 함수 외의 객체   | [1,2,3], new String("값"), new Number(12) | "object"    |
  | 함수             | function(){}                              | "function"  |

- **객체의 이름까지 알고 싶을 때** `toString() 함수를` 이용하여 해당 타입을 확인할 수 있다.
  ```js
  function getType(target) {
    return Object.prototype.toString.call(target).slice(8, -1);
  }
  ```

### 3-2. 산술 연산

- String 타입의 '+' 연산 방식을 제외하고 `대부분의 Data Type의` **'valueOf()'(우선순위 높음) 혹은 toString()으로 리턴된 값으로 연산을 한다.**
- null은 0, undefined는 NaN으로 강제 형변환되어 연산한다.
- `{} (block statements)` 에서 무엇이 반환되던지 **그것은 암묵적으로 0로 강제 형변환되어** `피연산자로` 사용된다.

  ```js
  null.valueOf(); // Error
  null + 1; // 1
  undefined + 1; // NaN
  NaN + "stirng"; // "NaNstring"
  {
    3;
  }
  +1; // 1
  {} + 1 // 1
  1 + 1{} // 1[object Object]
  ```

### 3-3. {} block statements VS object literal

- 블록 문장을 값이나 표현식으로 사용할 수는 없다.
- console.log는 문장(statement)을 인자로 받아들일 수 없다.
- 하지만, 오브젝트 리터럴은 인자로 받아들일 수 있다.
- 문장(statements)은 어느것도 반환하도록 되어있지 않다.(값으로 리턴될 수 없기 때문)
- 그래서 자바스크립트는 error을 내보내지 않는 대신에 `+ 연산자의 피연산자를` **숫자나 문자열로 바꾼다.**
  - 만일 바꿀 수 없는 값이라면 에러를 리턴한다
    > `블록 문장(block statements)`에서 무엇이 반환되던지 그것은 암묵적으로 **0로 강제 형변환되어 피연산자로 사용된다.**
  - 여기서 생각은 문장이 끝났으므로 0이아닌 문장이 끝난걸로 인식하고 그다음 표현식을 실행했다고 생각이 든다.

### 3-4. ==, === 비교

- '==' 비교는 타입이 일치 하지 않을 때, 강제 타입으로 변환시켜 비교하게 된다.

  ```js
  77 == "77"; // => "77" => Number("77")로 변환 후 검사
  false == 0; // => false => Number(false)로 변환 후 검사

  null == null; // =>  서로 같으며 자기 자신과도 같습니다. => true
  undefined == undefined; // =>  서로 같으며 자기 자신과도 같습니다. => true
  null == undefined; // =>  서로 같으며 자기 자신과도 같습니다. => true
  null == 0; // => false
  undefined == 0; // => false

  NaN == null; // 어떠한 값과도 동일하지 않다 false (Warning)
  NaN == undefined; // 어떠한 값과도 동일하지 않다 false (Warning)
  NaN == NaN; // 어떠한 값과도 동일하지 않다 false (Warning)
  ```

- '===' 비교는 `타입이일치 하진 않으면` **return false**, 타입이 `일치할 때` **값을 비교를 한다.** (Best Code)

## 4. function

```js
function name(parameter(인자)) {}
name(arguments(인수));
```

- parameter(인자)

  - 유효범위는 지역함수 이며, 프로그램 실행하면서 필요한 변수 값

- argument(인수)

  - 함수에 인자값이 있지만, 인수를 안 보내도 함수는 실행이 된다.
  - 해당하는 인자값을 모두 `undefined`로 정의 됨(lexcal Scope)

- 지역 변수

  - 함수내의 변수를 선언 할 수 있으며 안에서 식별자(var, const, let)로 선언한 변수들은 모두 지역 변수로 들어간다.
  - 함수 안에 함수를 실행할 수 있다.(Nested Function)

- return

  - return이 없을 경우 undefined를 리턴 한다.

- **JS에서는 함수가 객체이다.**

  - 함수 선언문으로 함수를 선언하면 내부적으로는 그 함수 이름을 변수 이름으로 한 변수와 **함수 객체가 만들어지고,** 함수 객체의 참조가 저장 된다.

## 5. object(instance)

- **연관배열(associative array)** 또는 **맵(map),** **딕셔너리(Dictionary)** 라는 데이터 타입이 객체에 해당한다.
- key, value 쌍으로 구성되어 있으며, key를 `해당하는(this)` 객체의 프로퍼티로 명한다.
- 생성된 객체는 메모리(RAM-Heap)에 정의되며 해당하는 **주소값(Reference Type)을 저장하는 구조이다.**

```javascript
const 객체 리터럴 = {'propertyName': 10, 'propertyName(Method)': function(){ console.log(this.propertyName)}};

var 객체 리터럴 = {};
객체 리터럴['propertyName'] = 10;
객체 리터럴['propertyName(Method)'] = function(){ console.log(this.propertyName) };
delete 객체 리터럴['propertyName']; // property delete -> confiualable일 때만!!

var 객체 생성자 = new 객체를 만들려는 함수명();
객체 생성자['propertyName'] = 10;
객체 생성자['propertyName(Method)'] = function(){ console.log(this.propertyName) };
```

### 5-1. 생성자

- 앞에 예제 처럼 `new 연산자로` 객체를 생성시킨 함수를 생성자라고 한다.
- 인스턴스는 **실체라는** 뜻이 있다.
- 객체 지향 언어에서(ex. JAVA, C++) 인스턴스는 `클래스(설계도)로` 생성한 실체를 뜻한다.
  - 하지만, JS에서는 **클래스가 없다.**
  - 또한, 함수 자체도 **함수객체로** 만든 해당 **함수 인스턴스 이다.**
  - 그래서, 생성자로 생성한 객체는 엄밀히 말해 인스턴스가 아니다.
    - 하지만, 생성자가 클래스처럼 객체를 생성하는 역할을 담당하고 있어 **생성자로 생성한 객체도 인스턴스라고 부르는것이 관례이다.**

### 5-2. this

- 함수가 속해있는 객체를 가리키는 변수이다.
- 함수를 어떻게 생성하냐에 따라서 달라질 수 있지만, 맥락에서는 function을 가지고있는 **객체 생성자(value Name), 객체 리터럴(value Name)** 를 말한다.

## 6. array

- 앞서 말한(Data type)에서도 원시 타입 이외는 모두 객체 참조이므로 array도 Array객체로 만들어진 **객체** 이다.
- 즉, 배열 넘버링(index)이 key값으로 저장된것이다.
  - 이 말은 즉, 여러 프로그래밍 언어에서 배열 요소는 **메모리에 연속된 공간에 저장 되지만, JS는 객체 그렇지 않다.**
  - ES6에서 `TypedArray에서는` 연속된 공간에 저장된다.
- 객체이기 때문에 delete가 가능한 프로퍼티가 있으면 **희소 배열로** 0 부터 시작되지 않은 배열이 만들어 질 수 있다.

```js
var a = [];
a[1] = 2;
a; // [empty, 2]
a.length; // 2

a.forEach((data, idx) => console.log(data, idx));
// 2 1 => 0이 넘겨짐

var s = a[Symbol.iterator]();
for (a of s) console.log(a);
// undefined
// 2
```

## Reference

- [자바스크립트 개발자라면 알아야 할 33가지 개념 #2 자바스크립트의 원시 타입(Primitive Type) (번역)](https://velog.io/@jakeseo_me/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EA%B0%9C%EB%B0%9C%EC%9E%90%EB%9D%BC%EB%A9%B4-%EC%95%8C%EC%95%84%EC%95%BC-%ED%95%A0-33%EA%B0%80%EC%A7%80-%EA%B0%9C%EB%85%90-2-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%9D%98-%EC%9B%90%EC%8B%9C-%ED%83%80%EC%9E%85Primitive-Type-%EB%B2%88%EC%97%AD)
- [자바스크립트 개발자라면 알아야 할 33가지 개념 #3 값(value) vs 참조(reference) (번역)](https://velog.io/@jakeseo_me/2019-04-01-1904-%EC%9E%91%EC%84%B1%EB%90%A8-2bjty7tuuf)
- [자바스크립트 개발자라면 알아야 할 33가지 개념 #4 암묵적 타입 변환(implicit coercion) (번역)](https://velog.io/@jakeseo_me/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EA%B0%9C%EB%B0%9C%EC%9E%90%EB%9D%BC%EB%A9%B4-%EC%95%8C%EC%95%84%EC%95%BC-%ED%95%A0-33%EA%B0%80%EC%A7%80-%EA%B0%9C%EB%85%90-4-%EC%95%94%EB%AC%B5%EC%A0%81-%ED%83%80%EC%9E%85-%EB%B3%80%ED%99%98-%EB%B2%88%EC%97%AD)
- [자바스크립트 개발자라면 알아야 할 33가지 개념 #5 == vs === 3분만에 배우기 (번역)](https://velog.io/@jakeseo_me/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EA%B0%9C%EB%B0%9C%EC%9E%90%EB%9D%BC%EB%A9%B4-%EC%95%8C%EC%95%84%EC%95%BC-%ED%95%A0-33%EA%B0%80%EC%A7%80-%EA%B0%9C%EB%85%90-5-vs-3%EB%B6%84%EB%A7%8C%EC%97%90-%EB%B0%B0%EC%9A%B0%EA%B8%B0-%EB%B2%88%EC%97%AD#-%ED%91%9C%EC%8B%9C-2%EA%B0%9C%EC%9D%98-%EB%8F%99%EB%93%B1-%EB%B9%84%EA%B5%90%EC%97%B0%EC%82%B0%EC%9E%90)
- [자바스크립트 개발자라면 알아야 할 33가지 개념 #6 함수와 블록 스코프 (번역)](https://velog.io/@jakeseo_me/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EA%B0%9C%EB%B0%9C%EC%9E%90%EB%9D%BC%EB%A9%B4-%EC%95%8C%EC%95%84%EC%95%BC-%ED%95%A0-33%EA%B0%80%EC%A7%80-%EA%B0%9C%EB%85%90-6-%ED%95%A8%EC%88%98%EC%99%80-%EB%B8%94%EB%A1%9D-%EC%8A%A4%EC%BD%94%ED%94%84-%EB%B2%88%EC%97%AD-dijuhrub1x)
- [자바스크립트 개발자라면 알아야 할 33가지 개념 #7 표현식(Expression)과 문장(Statement) (번역)](https://velog.io/@jakeseo_me/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EA%B0%9C%EB%B0%9C%EC%9E%90%EB%9D%BC%EB%A9%B4-%EC%95%8C%EC%95%84%EC%95%BC-%ED%95%A0-33%EA%B0%80%EC%A7%80-%EA%B0%9C%EB%85%90-7-%ED%91%9C%ED%98%84%EC%8B%9D%EA%B3%BC-%EB%AC%B8Statement-%EB%B2%88%EC%97%AD-2xjuhvbal7#%ED%91%9C%ED%98%84%EC%8B%9D%EC%9D%80-%EA%B0%92%EC%9D%84-%EB%A7%8C%EB%93%A4%EC%96%B4%EB%82%B8%EB%8B%A4)
- [네이티브 프로토타입](https://ko.javascript.info/native-prototypes)
