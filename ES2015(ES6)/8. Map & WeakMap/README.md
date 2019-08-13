# Map & WeakMap
## 1. Map & WeakMap 추가정보를 담은 객체 저장하기

개선해보려고 노력한 STL

`Array` -> set, weakSet

`Object` -> map, weakMap

__map은 key / value__

WeakMap
```javascript
    let wm = new WeakMap();
    let myfun = function(){};

    // 이 함수가 얼마나 실행됐지?를 알려고 할 때...?
    wm.set(myfun, 0);

    // out: function => 0 
    console.log(wm);

    let count = 0; 
    for(let i = 0; i < 10; i++) {
        count = wm.get(myfun); // get value
        count++;
        wm.set(myfun, count);
    }

    // console.log(wm);
    // out: 10
    console.log(wm.get(myfun));

    // garbageCollector
    myfun = null; 
    // out: undefined
    console.log(wm.get(myfun));
    // out: false
    console.log(wm.has(myfun));
```

## 2. WeakMap 클래스 인스턴스 변수 보호하기 

WeakMap 활용

### 1. 객체 생성
private variable 

__But!!__
```javascript
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
```

### 2. 개선 방향 
weakMap!!!

```javascript
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
```

__wm 장점 부각__
```javascript
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
```