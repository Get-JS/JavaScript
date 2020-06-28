# Scope
 
## 1. Scope Chain 

### var

- __function단위의 scope만 존재했기 때문에__ 
- fucntion안의 지역변수값을 먼저 찾고 그게 없다면 
- 전역변수로 위로 scope chain으로 찾게 된다.

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

### let

**block scope**를 갖게 된다.

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


## 2. Closure scope

### var (전역변수화)

```javascript
    (function closure_p() {
        var list = document.querySelector("li");
        for (var i = 0; i < list.clientHeight; i++) {
            list[i].addEventListener("click", function () {
                console.log(i + "번째 리스트 입니다."); // 4번째 리스트 입니다.
            });
        }
    })();
``` 

### let을 사용하기 (지역변수화)

- i는 **let키워드**를 사용했기 때문에 각각의 **블록함수로써 지역변수** 값을 할당하게 된다.

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

## 3. const

- **상수 키워드로 약속 지켰지만 변경이 됨..**

``` javascript
    function isYourHome() {
        var HOME_NAME = "my house";
        HOME_NAME = "your house";
    }
```

- const로 변경을 금지 시킴
- const를 기본으로 사용한다.
- __그런데 변경이 될 수 잇는 변수는 let을 사용한다.__

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


## 4. const 특성과 immutable array

### const 특성

- __const를 사용하더라도 배열과 오브젝트의 값을 변경하는 것은 가능하다.__
- __`절대 불변이 아니다.`__
- __일종의 값을(객체 참조) 재할당하는 코드만 불가능하다.(주소)__
- **const는 메모리 주소 참조를 하고 있으므로 주소 값을 바꾸지는 못한다.**
- **`즉, const 키워드를 가진 객체는 주소를 못바꾸지만 가지고 있는 변수의 값을 바꿀 수는 있다.`**

```javascript
    function whatIsHome() {
        const list = ["apple", "orange" , "watermelon"];
        list.push("bananaa");
    }
```

```javascript
    const h = [1, 2, 3, 4, 5];
    // ok
    h[0] = true;
    h[1] = false; 
    // no 
    h = [1,2, 3, 4,];
```

### immutable array?🤔

- 뒤로가기, 앞으로가기 데이터를 저장해서 보여주어야 하는 상황.
- conast array는 참조하는 값이 바뀜..
- 이전의 데이터를(original) 알 수 없다.

#### concat
```javascript
    const list = ["apple", "orange", "watermelon"];
    // 새로운 배열
    list2 = [].concat(list, "banana");
    // 증명
    console.log(list === list2); 
    // out: false
```
- list를 그대로 보관 하여 값이 바뀜이 없다. 