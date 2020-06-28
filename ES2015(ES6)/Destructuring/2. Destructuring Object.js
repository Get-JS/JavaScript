// 3.
let obj = {
    name : "crong",
    address : "Korea",
    age : 10
}

// let {name, age} = obj;
// console.log(name , age);


// 다름 변수 명을 정할 수 있다. 
let {name : myName , age : myAge} = obj;
console.log(myName , myAge);