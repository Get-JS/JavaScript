 # Array
 ## 1. for of - 순회하기
 
 ###for - in 의 문제점(Array)

 ```javascript
    var data = [1, 2, undefined, NaN, null, ""];
    for (var i = 0; i < data.length; i++) {
        console.log(i);
    }

    data.forEach(function (value) {
        console.log("valueis", vlaue);
    });

    // bad............
    for (let idx in data) {
        console.log(data[idx]);
    }
```

```javascript
    var data = [1, 2, undefined, NaN, null, ""];
    Array.prototype.getIndex = function () { };

    for (let idx in data) {
        console.log(data[idx]); // 출력시 function(){} 출력
    }
```
Object prototype도 순회한다. __`array도 일종의 Object`__

__자신이 갖고 있지 않은 상위의 값도 포함해서 결과에 출력할 수 있다.__

### for - of

```javascript
    var data = [1, 2, undefined, NaN, null, ""];
    Array.prototype.getIndex = function () { };
    for(let value of data) {
        console.log(value);
    }

    var str = "hello world!!!";
    for(let value of str) {
        console.log(value);
    }
```

__`배열 뿐만 아니라 문자열도 가능하다`__

문자 단위로 출력 (공백도 포함)

### Object using for - in

```javascript
    function Ultra(name){
        this.UltraNmae = name, 
        this.sf = function sf(){console.log("Ultra sf")}
    }
    Ultra.prototype.ultraProp = true;

    function Super(){}
    Super.prototype = new Ultra("ultra");

    var o = new Super();
    o.age = "22"
    o.name = "yjkwon07"

    for(var ss in o) console.log(ss);
```

출력
```
age
name
ultraProp
```

### Object using for - of
__But, object is not iterable__

```javascript
    for(var s of o) console.log(s); // VM3604:1 Uncaught TypeError: os is not iterable
```

__So. Object.key()__

```javascript
    for (let country of Object.keys(o)) {
        var capital = o[country];
        console.log(country, capital);
    } 
// age 22
```

## 2. spread operator, 펼침연산자
```javascript
    let pre = ["apple", "orange", 100];
    let newData = [...pre];

    console.log(pre, newData);
    // ["apple", "orange", 100]
    // ["apple", "orange", 100]

    console.log(pre === newData); // false
```
spread(...)를 사용하여 배열의 값들을 복사한다.

__여기서 pre와 newData는 다른(참조 주소가) 데이터이다.__

spread는 immutable과정 이라는것을 알게된다.

메모리의 새로운 공간에 새로운 데이터를 넣어 참조 한뒤, __완전히 복사__

## 3. spread operator - 몇가지 활용
### 배열을 특정 위치에 끼워넣을 때 활용
```javascript
    let pre = [100, 200, "hello", null];
    let newData = [0, 1, 2, 3, ...pre, 4];
    console.log(newData);
    // [0, 1, 2, 3, 100, 200, "hello", null, 4]
```

### 매개변수 인자값을 넣을 때 활용
```javascript
    function sum(a, b, c) {
        return a + b + c;
    }
    let pre2 = [100 ,200 ,300];

    sum(pre2[0] , pre2[1] , pre2[2]);
```
너무 귀찮아.

__1 sol. 이전 방법__
```javascript
    function sum(a, b, c) {
        return a + b + c;
    }
    let pre2 = [100 ,200 ,300];

    sum.apply(null, pre2);
    // out: 600
```

__2. spread operator__
```javascript
    function sum(a, b, c) {
        return a + b + c;
    }
    let pre2 = [100 ,200 ,300];

    sum(...pre2);

    console.log(sum.apply(null, pre2)); // 600
    console.log("result =>", sum(...pre2)); // 600
```
__immutable array__

즉, 배열을 바꾸지 않고 새로운 값을 복사할 수 있는 방법을 제공

배열을 merge하거나 spread하는방법으로 

__배열을 합치거나 펼쳐진 상태로 새로운 인자값으로 전달할 수 있는 기능__

## 4. from 메서드로 진짜 배열 만들기
### argument
```javascript
    function addMark() {
        let newData = [];
        for (let i = 0; i < arguments.length; i++) {
            newData.push(arguments[i] + "!");
        }
        console.log(newData);
    }
    addMark(1, 2, 3, 4, 5);
```
인자값을 안주더라도 내부값의 argument(객체)라는 펀션(function)안에 있는

__내부 지역변수와 같은 특별한 값을 이용한다.__ -> 베열과 비슷한 형태

__아주 권장되는 패턴은 아니다.__

### Error -> arguments는 map을 못쓴다.
```javascript
    function addMark() {
        let newData = arguments.map(function (value) {
            return value + "!";
        });
        console.log(newData);
    }
    addMark(1, 2, 3, 4, 5);
```
map을 사용하여 순회하면서 필요한 값을 추가하고,

새로운 배열을 반환

__But arguments는 map을 못쓴다.. `배열이 아니기 때문에`__

### from
__`from`으로__ 진짜 배열로 만든다.
```javascript
    function addMark2() {
        let newArray = Array.from(arguments);
        let newData = newArray.map(function (value) {
            return value + "!";
        });
        console.log(newData);
    }
    addMark2(1, 2, 3, 4, 5);
```
