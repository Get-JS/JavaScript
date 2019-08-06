var name = "global var";

(function let_p() {
    console.log(name);
    // out: global var
    var homevar = "homevar";
    //for(let i = 0; i < 100; i++) 
    for(var i = 0; i < 100; i++) {
    }
    // scope chain 
    // function단위의 scope만 존재했기 때문에
    // fucntion안의 지역변수값을 먼저 찾고 그게 없다면 
    // 전역변수로 위로 scope chain으로 찾게 된다.
    console.log(i);
    // out: 100
    // let -> exception

    // let
    // block scope 
    if(true) {
        let myif = "myif";
    }
    // console.log(myif) -> exception
})();
