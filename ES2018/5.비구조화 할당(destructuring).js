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
// const{ a, b} = 객체   '로 바꿀 수 있다.'
const {status , getCandy} = candyMachine;

// 비구조화 할당 시 this가 의도와 다르게 동작하는 현상이 있을 수 있다.
candyMachine.getCandy(); // 4
getCandy(); // undefined 
// getCandy로 따로 값을 받아오게 된다면
// this의 위치를 못찾아서 값을 undefined로 리턴한다.
// arrow func 으로 해도 못 찾는다.

candyMachine.getCandy(); // 3
getCandy.call(candyMachine); // 2
getCandy(); // undefined

// 배열에서도 가능하다.
const array = ['nodejs', {} , 10, true]; 
const node = array[0];
const obj = array[1];
const bool = array[array.length - 1];

// sol. => wow~~~
const [node , obj, ,bool] = array;
