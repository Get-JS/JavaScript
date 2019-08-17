// 함수 선언문
function add1(x , y) {
    return x + y;
}

// 함수 선언식 
var add2 = function(x, y) {
    return x + y;
}
//-------------------------------------------
// function(매개) { return 리턴 }
//  (매개) => { return 리턴 }
const add3 = (x , y) => {
    return x + y;
};

// (매개) => {return 리턴}
// 리턴만 있는 경우 
// (매개) => 리턴,
// (매개) => (리턴)
const add4 = ( x, y) => x + y;

//-----------------------------------------------
// why doesn't desploy function today?****
// Because this keyword!!!!
// function 내부의 this는 외부의 this와 다르기 때문에!!!!
// this를 that에 저장해서 써야 했다.
var relationship1  = {
    name: 'zero', 
    friends : ['nero', 'hero', 'xero'],
    logFrieds: function() {
        var that = this; // relationship1을 가리키는 this를 that에 저장
        this.friends.forEach(function(friend) {
            console.log(that.name, friend);
        });
    },
};
relationship1.logFrieds();

// 화살표 함수는 함수 내부의 this를 외부 this와 같게 만들어 준다.
// 원래 foreach function안에 this가 window로 가리켰지만,
// relationsthip2를 가리킬 수 있다.
// 따라서 바깥 스코프인 logFriends()의 this를 그대로 사용할 수 있다.
// 상위 스코프의 this를 그대로 물려 받는다.
var relationship2  = {
    name: 'zero', 
    friends : ['nero', 'hero', 'xero'],
    logFrieds() {
        this.friends.forEach((friend) => {
            console.log(this.name, friend);
        });
    },
};
relationship2.logFriends();
