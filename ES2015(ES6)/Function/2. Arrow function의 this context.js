// Arrow function의 this context
// context 문제로 bind를 많이 사용하고 있다.
const myObj = {
    runTimeout() {
        setTimeout(function() {
            console.log(this === window);
            // out: true -> bind를 안 할때
            // out: false -> bind를 할 때 
            
            this.printData(); 
            // bind하기 전
            // this.printData is not a func at 
            // so bind로 감싸준다. 
            /*
                this Object는 function이 아니다.
                this -> window는 printData()를 가지고 있지 않다.)
                보통 함수를 bind로 감싸주면 된다.
                this.printData();
            */
            
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
// -> bind
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