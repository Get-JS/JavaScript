# Destructuring
## 1. Destructuring Array

필요한 배열에 특정 인덱스값이 의미가 있을 때 뽑아서 쓸 수 있다.
```javascript
    let data = ["yjkwon07", "honux", "jk", "jinny"];

    let jisu = data[0];
    let jung = data[2];
```

변수에 배열이나 Object에 값을 할당할 때 유용함
```javascript
    let [jisu, ,jung] = data;
    console.log(jisu, jung); // out: yjkwon07, honux
```

## 2. Destructuring Object
```javascript
    let obj = {
        name : "yjkwon07",
        address : "Korea",
        age : 10
    }

    let {name, age} = obj;
    console.log(name , age); // out: yjkwon07 10
```

다른 변수 명을 정할 수 있다.
```javascript
    let obj = {
        name : "yjkwon07",
        address : "Korea",
        age : 10
    }
    
    let {name : myName , age : myAge} = obj;
    console.log(myName , myAge);
```

## 3. Destructuring 활용 JSON파싱
```javascript
    var news = [
        {
            "title" : "sbs",
            "image" : "https://",
            "newslist" : [
                "[가나다] 가나다",
                "가나다 [가나다]"
            ]
        },
        {
            "title" : "mbc",
            "image" : "https://",
            "newslist" : [
                "[라마바사] 라마바사",
                "라마바사 [라마바사]"
            ] 
        }
    ];

    let [, mbc] = news; 
    let {title, image} = mbc;
    console.log(title , image); // out: mbc https://
```

### 로직 개선

한방에 뽑는 방법 

한줄을 줄여줌 !!! 완전 우아하네 ~~

```javascript
    let [, {title, image}] = news;
    console.log(image);
```

### 또다른 방법

매개변수에서 destructuring

newslist만 출력

```javascript
    function getNewsList([, {newslist}]) {
        console.log(newslist);
    }
    getNewsList(news);
```

## 4. Destructuring활용_Event 객체 전달

event객체에서 target만 가져온다.

```javascript
    document.querySelector("div").addEventListener("click", function (event) {
        // event -> 오브젝트
        console.log(event);
        console.log(event.target.tagName);
    });
    document.querySelector("div").addEventListener("click", function ({ target }) {
        console.log(target.tagName);
    });
```

## 5. Destructuring의 문제점
getCandy로 따로 값을 받아오게 된다면 this의 위치를 못찾아서 값을 undefined로 리턴한다.

arrow func 으로 해도 못 찾는다.
```javascript
// 객체 리터럴
const candyMachine = {
    status: {
        name : 'node',
        count : 5,
    },
    getCandy() {
        this.status.count--;
        return this.status.count;
    }
};
// const a = 객체.a
// const b = 객체.b를 
// const{ a, b } = 객체로 바꿀 수 있다.
const {status , getCandy} = candyMachine;

// 비구조화 할당 시 this가 의도와 다르게 동작하는 현상이 있을 수 있다.
candyMachine.getCandy(); // 4
getCandy(); // undefined 
```

### call(Solve)

```javascript
candyMachine.getCandy(); // 3
getCandy.call(candyMachine); // 2
getCandy(); // undefined
```
