 # String
 ## 1. ES2015 String에 새로운 메서드들
 ```javascript
    let str = "hello world ! ^^ ~~~";
    let matchstr = "hello";
    let endchstr = "^ ~~~";
    // 함께 시작하니?
    console.log(str.startsWith(matchstr));
    // 함께 끝나니?
    console.log(str.endsWith(endchstr));
    // world라는 글자가 들어가 있어?
    console.log("include test ", str.includes("world"));
```