# Scope
## 1. ES2015(ES6) 시작하기

ES6 === ES2015

(ES2016, ES2017....)

ES2015

개선된 JavaScript문법

ES6 browser compatibility의 훌륭한 지원

ES6를 기반으로 한 JavaScript 생태계의 확산

## 2. let
    
### scope chain 
```javascript
    var name = "global var";

    (function let_p() {
        console.log(name);
        // out: global var

        var homevar = "homevar";
        for(var i = 0; i < 100; i++) {
        }

        console.log(i);
        // out: 100

    })();
```
__var:__

function단위의 scope만 존재했기 때문에

fucntion안의 지역변수값을 먼저 찾고 그게 없다면 

전역변수로 위로 scope chain으로 찾게 된다.

```javascript
    for(let i = 0; i < 100; i++){

    }
    console.log(i);
    // let -> exception
    
    // let
    // block scope 
    if(true) {
        let myif = "myif";
    }
    console.log(myif) // -> exception
```
__let:__ block scope를 갖게 된다.
### var VS. let, const Diff~!!
[var(function-scoped) VS. let, const(block-scoped)](https://gist.github.com/LeoHeo/7c2a2a6dbcf80becaaa1e61e90091e5d)

## 3. let과 closure
### closure scope

```javascript
    (function closure_p() {
        var list = document.querySelector("li");
        for (var i = 0; i < list.clientHeight; i++) {
            list[i].addEventListener("click", function () {
                console.log(i + "번째 리스트 입니다.");
            });
        }
    })();
``` 
__var:__

callback은 나중에 실행된다. 

callback이 가지고 있는 i 값은 callback 밖에 있는 var i를 참조 하여

클로저 변수를 가지게 된다.

i 값이 변경이 되다 보니... i를 참조하여 쉐어 하고 있는 상황에 

i는 마지막에 4가 되어 모두 4가 나오게 된다.
```javascript 
    (function closure_p() {
        var list = document.querySelector("li");
        for (let i = 0; i < list.clientHeight; i++) {
            list[i].addEventListener("click", function () {
                console.log(i + "번째 리스트 입니다.");
            });
        }
    })();
```
__let을 사용하기 (지역변수화 시키기)__

i는 let키워드를 사용했기 때문에 각각의 블록함수로써 지역변수 값을 할당하게 된다.

## 4. const-선언된 변수 지키기

``` javascript
    function isYourHome() {
        var HOME_NAME = "my house";
        HOME_NAME = "your house";
    }
```
var로 대문자로 약속을 하는 상황

상수 키워드로 약속 지켰지만 변경이 됨..
```javascript
    function isYourHome() {
        const HOME_NAME = "my house";
        HOME_NAME = "your house";
    }

// So what?
    function home() {
        const homename = [1, 2, 3, 3,];
        homename = ["1", "2"];
        console.log(homename); // error
    }
```
const로 변경을 금지 시킴

const를 기본으로 사용한다.

__그런데 변경이 될 수 잇는 변수는 let을 사용한다.__

var는 사용하지 않는다.(지양한다.)

## 5. const 특성과 immutable array
### 1.const 특성
```javascript
    function whatIsHome() {
        const list = ["apple", "orange" , "watermelon"];
        list.push("bananaa");
    }
```
추가가 됨....

__const를 사용하더라도 배열과 오브젝트의 값을 변경하는 것은 가능하다.__

__절대 불변이 아니다.__

__일종의 값을(객체 참조) 재할당하는 코드만 불가능하다.(주소)__

immutable array를 어떻게 만들지? 🤔

- 뒤로가기, 앞으로가기 데이터를 저장해서 보여주어야 하는 상황.

- array는 참조하는 값이 바뀜..

- 이전의 데이터를(original) 알 수 없다.

__So immutable(불변) array!!!__

### 2.immutable array
```javascript
const list = ["apple", "orange", "watermelon"];
// 새로운 배열
list2 = [].concat(list, "banana");
// 증명
console.log(list === list2); // false
```
list를 그대로 보관 하여 값이 바뀜이 없다. 