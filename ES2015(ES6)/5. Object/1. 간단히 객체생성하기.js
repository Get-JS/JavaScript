// Object
const name = "crong";
const age = 33;

var obj = {
    name : name,
    age : age
};
console.log("obj 1 : ", obj);

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

    // 새로운 Object 반환
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

// 2. key와 function 없이 생성 
const data  = {
    name,
    getName() {

    },
    age
};
console.log("obj3 : " ,data);
