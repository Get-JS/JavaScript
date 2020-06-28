# JS Object

## new 연산자 역할

```js
  function Circle(center, radius) {
    this.center = center;
    this.radius = radius;
  }
  Circle.prototype.area = function() {
    return Math.PI*this.radius*this.radius;
  }

  var c = new Circle({x:0,y:0},2.0)
  var newObj = {};

  newObj.__proto__ = Cicle,prototype;
  Circle.apply(newObj, arguments);
  return new Obj;
```

```js
  Object.keys 
  Object.getOwnProperyNames


  Object.preventExtensions // 추가
  Object.seal // 추가,삭제,수정
  Object.freeze // 재정의,추가,삭제,수정
```

