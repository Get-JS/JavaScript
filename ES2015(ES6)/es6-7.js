// Arrow Function

// 콜백 함수 -> 나중에 실행되는 함수
setTimeout(function() {
    console.log("settimout");
}, 1000);

// 축약 표현 
setTimeout( () => {
    console.log("settimeout arrow");
} , 1000);


// callback 함수의 문제가 함수가 너무 길어...
let newArr = [1, 2, 3, 4, 5].map(function(value , index, object) {
    return value * 2;
});

console.log(newArr);

// 더 축약 
// return도 생략
// brace를 가급적 해주는게 좋다 
let newArr = [1, 2, 3, 4, 5].map( (v) => (value * 2) );
console.log("arrow newArr", newArr);

// Arrow function의 this context
// context 문제로 bind를 많이 사용하고 있다.
const myObj = {
    runTimeout() {
        setTimeout(function() {
            // true
            console.log(this === window);
            // this Object는 function이 아니다.
            // this -> window (printData()를 가지고 있지 않다.)
            // 보통 함수를 bind로 감싸주면 된다.
            // this.printData();
            
        }.bind(this), 200);
    }, 

    printData() {
        console.log("hi codesquard!!");
    }
}

myObj.runTimeout();


// Arrow함수일경우 다르다. 
const myObj = {
    runTimeout() {
        // this가 가리키는게 window가 아니고 
        // this가 가리키는 context가 실행타이밍에 가리키는 것
        // Event_Queue에 있다가 나중에 실행이 됨 this -> window
        // 하지만 arrow는 contex를 유지하고 있다.
        setTimeout( () => {
            // false!!!
            console.log(this === window);
            
        }, 200);
    }, 

    printData() {
        console.log("hi codesquard!!");
    }
}

const el = document.querySelector("p");

const myObj = {
    
    register() {
        el.addEventListener("click", function(event) {
            this.printData();
            // 2. ok
        }).bind(this);
    },

    printData() {
        console.log("clicked!!!");
    }
}
// 1. error -> this.printData (not Function)
myObj.register();

// ArrowFunctiob Effect !!!!
// this라는 것이 이전에는 실행 타이밍에 callback()에 호출하는것에서 
// 바뀔수 있지만, 
// callback()함수를 감싸고 있는 Object 선언된걸 this가 가리킨다. 
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


// Function default paramaters
// 기본 매개변수
// parameter 부분에서 미리 설정 가능
function sum(value , size = {value : 1}) {
    size = size || 1;
    return value * size.value;
}
console.log(sum(3, 10));
console.log(sum(3, {value : 3}));


// rest paramaters
// spread operator와 유사
// 들어오는 인자 값이 number??
// ES3
function checkNum() {
      // 가변인자(argument)활용하기 -> 가짜 배열
      // 기본 built-in function인 arguement가 있지만
      // 배열로 사용할 수 없다.
      // slice 실행해 줘~~
      const argArray = Array.prototype.slice.call(arguments);
      // Array
      console.log(toString.call(argArray));
      // if 안하면 Object Arguments 반환
      
      // every : 모두가 true일 경우만 true를 반환한다.
      const result = argArray.every( (v) => typeof v === "number");
      // false -> "55"는 문자열 
      console.log(result);
}

const result = checkNum(10, 2, 3, 4,5 , "55");

// ES6 
// 매개변수에 ... -> resetparameters
// 그 이외 변수 값 -> spread operator
function checkNum(...argArray) {
    // Array
    console.log(toStirng.call(argArray));
    const result = argArray.every( (v) => typeof v === "number");
    console.log(result);
}
const reuslt = checkNum(10 , 2, "55");


