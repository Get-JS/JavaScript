# Object

```javascript
const name = "yjkwon07";
const age = 26;

var obj = {
    name : name,
    age : age
};
console.log("obj 1 : ", obj);
```

## 1. 새로운 Object 반환
```javascript
    function getObj() { 
        const name = "Im ck";
        
        const getName = function() {
            return name;
        }
        
        const setName = function(newname) {
            name = newname;
        }
        
        const printName = function() {
            console.log(name);
        }

        // Object 리터럴
        return {
            // getName : getName,
            // setName : setName
            
            // 이름과 value 값이 일치하면, 
            getName, 
            setName,

            // Object의 value도 반환 가능
            name
        }
    }
    var obj2 = getObj();
    console.log("obj2 : " , obj2);
```

## 2. key와 function 없이 생성 
```javascript
    const data  = {
        name,
        getName() {

        },
    };
    console.log("obj3 : " ,data);
```