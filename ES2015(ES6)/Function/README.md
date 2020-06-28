# Function

## 1. 함수

### 함수 선언문

```javascript
  function add1(x , y) {
    return x + y;
  }
```

### 함수 표현식 

```javascript
  var add2 = function(x, y) {
    return x + y;
  }
```

### 리턴

```javascript
  // function(매개) { return 리턴 }
  //  (매개) => { return 리턴 }
  const add3 = (x , y) => {
    return x + y;
  };
  
  // (매개) => {return 리턴}
  // 리턴만 있는 경우 
  // (매개) => 리턴,
  // (매개) => (리턴)
  const add4 = (x, y) => x + y;
```

### this

- why doesn't desploy function today?
- **Because this keyword!!!!**
- function 내부의 this는 외부의 this와 다르기 때문에!!!!
- this를 that에 저장해서 써야 했다.

```javascript
  var relationship1  = {
    name: 'zero', 
    friends : ['nero', 'hero', 'xero'],
    logFrieds: function() {
      var that = this; // relationship1을 가리키는 this를 that에 저장
      this.friends.forEach(function(friend) {
        console.log(that.name, friend);
      });
    },
  };
  relationship1.logFrieds();
```

## 2. Arrow Function

- **축약의 장점**

```javascript
  // 콜백 함수 -> 나중에 실행되는 함수
  setTimeout(function() {
    console.log("settimout");
  }, 1000);
  
  // 축약 표현  
  setTimeout(() => {
    console.log("setTimeout arrow");
  }, 1000);
  
  // callback 함수의 문제가 함수의 인자가 너무 길어...
  let newArr = [1, 2, 3, 4, 5].map(function(value , index, object) {
    return value * 2;
  });
  console.log(newArr);
  
  // 더 축약 
  // return도 생략
  // brace를 가급적 해주는게 좋다 
  let newArr = [1, 2, 3, 4, 5].map((v) => (v * 2));
  console.log("arrow newArr", newArr);
```

## 3. Arrow function의 this context

- **화살표 함수는 함수 내부의 this를 외부 this와 같게 만들어 준다.**
- 원래 forEach function안에 this가 window로 가리켰지만, relationsthip2를 가리킬 수 있다.
- 따라서 바깥 스코프인 logFriends()의 this를 그대로 사용할 수 있다.
- **상위 스코프의 this를 그대로 물려 받는다.**

```javascript
  var relationship2  = {
    name: 'zero', 
    friends : ['nero', 'hero', 'xero'],
    logFrieds() {
      this.friends.forEach((friend) => {
        console.log(this.name, friend);
      });
    }
  };
  relationship2.logFriends();
```

### 3-1. bind

- __context(this) 문제로 `bind를 많이 사용하고 있다.`__
- **this** Object는 function이 아니다. => keyword
- this -> window는 printData()를 가지고 있지 않다.
- __`보통 함수를 bind로 감싸주면 된다.`__

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

### 3-2. Arow Function

- __But, Arrow함수일 경우 다르다.__
- this가 가리키는게 window가 아니고 
- __this가 가리키는 context가 실행타이밍에 가리키는 것__

```javascript
  const myObj = {
    runTimeout() {
      setTimeout(() => {
        // out: false!!!
        console.log(this === window);
      }, 200);
    },   
    printData() {
      console.log("hi yjkwon07!!");
    }
  }
```

### 3-3. Event_Queue & callback

- **Event_Queue**에 있다가 나중에 실행이 됨 **`this -> window`**
- 하지만 arrow는 context를 유지하고 있다.

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

### 3-4. ArrowFunctiob Effect !!!!

- __this라는 것이 이전에는 실행 타이밍에 `callback()에` 호출하는곳에서 바뀔수 있지만,__
- callback()함수를 감싸고 있는 Object 선언된걸 this가 가리킨다. 

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

## 4. Function default paramaters

- __기본 매개변수__
- parameter 부분에서 미리 설정 가능

```javascript
  function sum(value, size = {value : 1}) {
    // size = size || 1;
    return value * size.value;
  }
  console.log(sum(3, 10)); // 30
  console.log(sum(3, {value : 3})); // 9
  console.log(sum(3)); // 3
```

## 5. rest paramaters

- spread operator와 유사
- 들어오는 인자 값이 number??

### ES3

- 가변인자(argument)활용하기 -> 유사 배열
- 기본 built-in function인 `arguement가` 있지만
- __배열로 사용할 수 없다.__
- __`slice`__

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

### ES6 spread operator

- 매개변수에 ... -> reset parameters
- 그 이외 변수 값 -> spread operator

```javascript
  function checkNum(...argArray) {
    // Array
    console.log(toStirng.call(argArray));
    const result = argArray.every( (v) => typeof v === "number");
    console.log(result);
  }
  const reuslt = checkNum(10 , 2, "55");
```