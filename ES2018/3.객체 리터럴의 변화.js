var sayNode = function() {
    console.log("Node");
}
var es = "ES";
var oldObject = {
    sayJS: function() {
        console.log('JS');
    },
    sayNode: sayNode,
};
oldObject[es + 6] = 'Fantasitic';
oldObject.sayNode();
oldObject.sayJS();
console.log(oldObject.ES6);
//----------------------------------------------------------------------
const newObject = {
    // function{} 
    sayJS() {
        console.log("JS");
    },
    // key , value가 같다면 하 나로!!
    sayNode,
    // 동적 속성 할당을 리러털 안에 표현이 가능하다.
    // { [변수] : 값 } 
    [es+6]: "Fatasitic",
};
newObject.sayNode(); // Node
newObject.sayJS(); // JS
console.log(newObject.ES6);