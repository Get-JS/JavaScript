# Set&WeakSet
## 1. Set으로 유니크한 배열만들기

'object' of Set

__`set:` 중복없이 유일한 값을 저장하려고 할때.__

이미 존재하는지 체크할 때 유용.

__set도 사실 `배열과` 유사함__

```javascript
    let mySet = new Set();
    console.log(toString.call(mySet));

    mySet.add("yjkwon07");
    mySet.add("navie");
    mySet.add("ck");

    // 존재 하는지?
    // has : 가지고 있는지
    console.log(mySet.has("yjkwon07"));
    
    // 순회
    mySet.forEach(function(v) {
        console.log(v);
    });
    
    // delete : value삭제
    mySet.delete("yjkwon07");
    // 순회
    console.log("after, delete : ");
    mySet.forEach(function(v) {
        console.log(v);
    });
```

## 2. WeakSet으로 효과적으로 객체타입저장하기

**`weakset :`** **참조를 가지고 있는 객체만** 저장이 가능하다.

객체형태를 중복없이 저장하려 할 때 유용하다.
```javascript
    let arr = [1, 2, 3, 4];
    let arr2 = [5, 6, 7, 8];
    let obj = {arr, arr2};

    let ws = new WeakSet();

    // invalid type Error (Only Object)
    // primitive type Nope!~~
    // ws.add(111);
    // ws.add("111");
    // ws.add(null);

    ws.add(arr);
    ws.add(arr2);
    ws.add(obj);

    // ok 함수는 참조객체니깐
    ws.add(function(){});

    // garbageCollection 대상이 된다.!!!!
    arr = null; 

    // WeakSet에서는 존재하는것 처럼 보인다.
    console.log(ws);

    // arr -> 유효하지 않은 객체라는것을 알고 있다.
    // (null!!! -> garbageCollector) 
    console.log(ws.has(arr), ws.has(arr2));
    // out: false true
```

