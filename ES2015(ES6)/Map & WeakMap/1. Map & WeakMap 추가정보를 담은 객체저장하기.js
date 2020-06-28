// Map & WeakMap 추가정보를 담은 객체 저장하기
// map & WeakMap

// 개선해보려고 노력한 STL
// Array -> set, weakSet
// Object -> map, weakMap

// map은 key / value
let wm = new WeakMap();
let myfun = function(){};

// 이 함수가 얼마나 실행됐지?를 알려고 할 때...?
wm.set(myfun, 0);
// function => 0 print
console.log(wm);

let count = 0; 
for(let i = 0; i < 10; i++) {
    count = wm.get(myfun); // get value
    count++;
    wm.set(myfun, count);
}

// console.log(wm);
console.log(wm.get(myfun));

// garbageCollector
myfun = null; 
// undefined
console.log(wm.get(myfun));
// false
console.log(wm.has(myfun));