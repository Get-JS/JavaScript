// * Promise.all로 여러 프로미스를 동시에 실행 가능하다.
// * 단, 하나라도 실패하면 catch로 간다.
Promise.all([Users.findOne(), Users.remove(), Users.update()])
.then( (result) => { })
.catch( (error) => { });

// * call back : 결과를 바로 이어져서 나와야 한다.
// * promise : 결과를 갖고 있지만 나중에 나와도(then이나 catch로) 된다.

// * call back
// * 하나로 합쳐짐
Users.findOne('zero', (err, user) => {
  console.log(user);
});

// * promise
const zero = Users.findOne('zero');
// * zero에는 결과값을 갖고있는 상태이다.

// * 중간에 결과값을 수정도 할 수 있다.
// * 개발자에게 자유도, 활용도를 높여주게끔 되어있다.
zero = Users.findOne('nero');

// * 다른 로직 
zero.then((z) => {
  console.log(z);
});
