(function closure_p() {
    /*
        closure scope 
        callback은 나중에 실행된다. 
        callback이 가지고 있는 i 값은 callback 밖에 있는 var i를 참조 하여
        클로저 변수를 가지게 된다.
        i 값이 변경이 되다 보니... i를 참조하여 쉐어 하고 있는 상황에 
        i는 마지막에 4가 되어 모두 4가 나오게 된다.
    */
    /*
        var list = document.querySelector("li");
        for (var i = 0; i < list.clientHeight; i++) {
            list[i].addEventListener("click", function () {
                console.log(i + "번째 리스트 입니다.");
            });
        }
    */
   
    // let을 사용하기 
    // 지역변수화 시키기 
    for (let i = 0; i < list.clientHeight; i++) {
        list[i].addEventListener("click", function () {
            console.log(i + "번째 리스트 입니다.");
        });
    }
})();