# Function

## 1. Arrow Function
축약의 장점
```javascript
    // 콜백 함수 -> 나중에 실행되는 함수
    setTimeout(function() {
        console.log("settimout");
    }, 1000);

    // 축약 표현  
    setTimeout( () => {
        console.log("setTimeout arrow");
    } , 1000);

    // callback 함수의 문제가 함수의 인자가 너무 길어...
    let newArr = [1, 2, 3, 4, 5].map(function(value , index, object) {
        return value * 2;
    });

    console.log(newArr);

    // 더 축약 
    // return도 생략
    // brace를 가급적 해주는게 좋다 
    let newArr = [1, 2, 3, 4, 5].map( (v) => (v * 2) );
    console.log("arrow newArr", newArr);
```

## 2. Arrow function의 this context
### bind
__context 문제로 `bind를 많이 사용하고 있다.`__

```javascript
    const myObj = {
        runTimeout() {
            setTimeout(function() {
                console.log(this === window);
                // out: true -> bind()를 안 할때
                // out: false -> bind()를 할 때 
                
                this.printData(); 
                // bind 호출하기 전
                // this.printData is not a func at 
                // so bind로 감싸준다.             
            }.bind(this), 200);
        }, 

        printData() {
            console.log("hi yjkwon07!!");
        }
    }
    myObj.runTimeout();
```
this Object는 function이 아니다.

this -> window는 printData()를 가지고 있지 않다.

__`보통 함수를 bind로 감싸주면 된다.`__

### Arow Function
__But, Arrow함수일 경우 다르다.__

```javascript
    const myObj = {
        runTimeout() {
            setTimeout( () => {
                // out: false!!!
                console.log(this === window);
            }, 200);
        }, 

        printData() {
            console.log("hi yjkwon07!!");
        }
    }
```
this가 가리키는게 window가 아니고 

__this가 가리키는 context가 실행타이밍에 가리키는 것__

### Event_Queue & callback
```javascript
    const el = document.querySelector("p");

    const myObj = {

        register() {
            el.addEventListener("click", function(event) {
                // 1. (bind 설정 안할 시)error -> this.printData (not Function)
                this.printData();
                // 2. ok
            }).bind(this);
        },

        printData() {
            console.log("clicked!!!");
        }
    }
    myObj.register();
```
Event_Queue에 있다가 나중에 실행이 됨 this -> window

하지만 arrow는 context를 유지하고 있다.

### ArrowFunctiob Effect !!!!

__this라는 것이 이전에는 실행 타이밍에 `callback()에` 호출하는곳에서 바뀔수 있지만,__

callback()함수를 감싸고 있는 Object 선언된걸 this가 가리킨다. 
```javascript
    const myObj = {
        
        register() {
            el.addEventListener("click", (event) => {
                this.printData(event.target);
                // ok
            });
        },

        printData(el) {
            console.log("clicked!!!", el.innerText);
        }
    }

    el.addEventListener("click", function(event) {
        // HTMLPargarmentElement -> p 태그를 가리키고 있다.
        console.log(this);
    });
```

## 3. Function default paramaters
__기본 매개변수__

parameter 부분에서 미리 설정 가능
```javascript
    function sum(value , size = {value : 1}) {
        // size = size || 1;
        return value * size.value;
    }
    console.log(sum(3, 10)); // 30
    console.log(sum(3, {value : 3})); // 9
    console.log(sum(3)); // 3
```

## 4. rest paramaters
spread operator와 유사

들어오는 인자 값이 number??

__ES3__
가변인자(argument)활용하기 -> 가짜 배열

기본 built-in function인 `arguement가` 있지만

__배열로 사용할 수 없다.__

__`slice` 실행해 줘~~__
```javascript
    function checkNum() {

        const argArray = Array.prototype.slice.call(arguments);
        // Array
        console.log(toString.call(argArray));
        // 만약 slice 안하면 Object Arguments 반환
        
        // every : 모두가 true일 경우만 true를 반환한다.
        const result = argArray.every( (v) => typeof v === "number");
        // false -> "55"는 문자열 
        console.log(result);
    }

    const result = checkNum(10, 2, 3, 4,5 , "55");
```

__ES6__ 

매개변수에 ... -> reset parameters

그 이외 변수 값 -> spread operator
```javascript
    function checkNum(...argArray) {
    // Array
    console.log(toStirng.call(argArray));
    const result = argArray.every( (v) => typeof v === "number");
    console.log(result);
    }
    const reuslt = checkNum(10 , 2, "55");
```

