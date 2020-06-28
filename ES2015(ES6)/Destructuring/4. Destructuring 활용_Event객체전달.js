// 4. Destructuring활용_Event 객체 전달
// event객체에서 target만 가져온다.
document.querySelector("div").addEventListener("click", function (event) {
    // event -> 오브젝트
    console.log(event);
    // console.log(event.target.tagName);
});
document.querySelector("div").addEventListener("click", function ({ target }) {
    console.log(target.tagName);
});



