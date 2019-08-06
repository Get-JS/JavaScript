// 2. WeakMap 클래스 인스턴스 변수 보호하기 

// WeakMap 활용


// 1. 객체 생성
function Area(height ,width){
    this.height = height;
    this.width = width;
}

Area.prototype.getArea = function() {
    return this.height * this.width;
}

let myarea = new Area(10, 20);
console.log(myarea.getArea());
console.log(myarea.height); // 출력이 된다... 

// 2. 개선 방향 
// weakMap
const wm = new WeakMap();
function Area2(height ,width){
    // 단점은 클래스 밖에 전역변수를 보관하고 있다...
    wm.set(this, {height, width});
}
Area2.prototype.getArea = function() {
    const {height, width} = wm.get(this);
    return height * width;
}
let myarea2 = new Area(10, 20);
console.log(myarea2.getArea());
console.log(myarea2.height); // undefined

// 전역변수 -> weakMap 활용 !! 
console.log(wm.has(myarea2));
// out: true
myarea2 = null;

console.log(wm.has(myarea2));
// out: false

// 3. 객체 활용
// wm 장점 부각
const obj = {};
function Area3(height ,width){
    obj['height'] = height;
    obj['width'] = width;
}
Area3.prototype.getArea = function() {
    return obj.height * obj.width;
}
let myarea3 = new Area(10, 20);

console.log(obj);
// garbageCollector 대상이 아니다.
// 계속 쌓여 나감...
myarea = null;
console.log(obj);