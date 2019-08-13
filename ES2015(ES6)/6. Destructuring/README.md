# Destructuring
## 1. Destructuring Array

필요한 배열에 특정 인덱스값이 의미가 있을 때 뽑아서 쓸 수 있다.
```javascript
    let data = ["crong", "honux", "jk", "jinny"];

    let jisu = data[0];
    let jung = data[2];
```

변수에 배열이나 오브젝트에 값을 할당할 때 유용함
```javascript
    let [jisu, ,jung] = data;
    console.log(jisu, jung);
```

## 2. Destructuring Object
```javascript
    let obj = {
        name : "yjkwon07",
        address : "Korea",
        age : 10
    }

    let {name, age} = obj;
    console.log(name , age);
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
    console.log(title , image);
```

위의 로직을 개선 방향

한방에 뽑는 방법 

한줄을 줄여줌 !!! 완전 우아하네 ~~

```javascript
    let [, {title, image}] = news;
    console.log(image);
```

또다른 방법

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



