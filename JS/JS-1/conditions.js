// 조건문
// === -> 연산자 타입과 함께 check
if("10" === 10) console.log("ok");
if("10" === "11") console.log("ok");
// condition
if(10 === 5){
    // block
    console.log("ok");
}else {
    console.log("no");
}

if(20 > 5 && "nicolas" === "nicolas") {
    console.log("ok");
}else {
    console.log("no");
}

if(20 > 5 || "nicolas" === "nicolas") {
    console.log("ok");
}else {
    console.log("no");
}
/*
    true && true = true;
    false && true = false;
    true && false = false;
    false || false = false;
*/