// 콜백을 쓰는 이유가 JS 코드 중 논블록킹(비동기)으로 작동하기 때문에

// But, 연달아 콜백이 일어날 때 문제가 발생할 수 있다.
// 콜백 안에 또 콜백을 호출... call back hell.....
Users.findOne('zero', (err, updateUser)=> {
    if(err) return console.log(err);
    console.log(user);
    Users.update('zero' , (err, updatedUser) => {
        if(err) return console.log(err);
        console.log(updatedUser);
        Users.remove('undo', (err, removeUser) => {
            console.log('ok');
        });
    });
});
//---------------------------------------------------
// sol 1.콜백을 변수로 빼서 사용
// But, 흐름 파악하기 까다로움.... 코드를 계속해서 찾아야 한다....
const afterRemove = (err, removeUser) => {
    console.log(removeUser);
}

const afterUpdate = (err, updateUser) => {
    console.log(updateUser);
    Users.remove('nero', afterRemove);
}

Users.findOne('zero', (err, user) => {
    if(err) return console.err(err);
    console.log(user);
    Users.update('zero', 'nero', afterUpdate);
});

//---------------------------------------------------------------------
// 노드의 API들이 'Promise기반'으로 재편되고 있어 중요해졌다.
// sol 2. Promise 생성자
// Promise를 지원하는 메서드는 내부적으로 지원해주기 때문에 사용이 가능하다.
const plus = new Promise((resolve, reject) => {
    // 콜백 함수 구현
    const a = 1; 
    const b = 2;
    if(a + b > 2){
        // 성공메시지 전송
        resolve(a + b); 
    } else {
        // 실패메시지 전송
        reject(a + b); 
    }
});

plus 
    .then((sucess) => {
        console.log(sucess);
    })
    .catch((fail) => {
        console.log(fail);
    });
// out : 3

const Users = {
    findOne() {
        return new Promise((res , rej) => {
            if('사용자를 찾으면') {
                res('사용자');
            }
            else {
                rej("못 찾겠으");
            }
        })
    },
    remove() {
        return new Promise();
    },
    update() {
        return new Promise();
    }
};

Users.findOne()
    .then()
    .catch();

// then에 리턴 값이 있으면, 다음 then으로 넘어간다.
// Promise를 리턴하면 resolve나 reject 되어 넘어간다.
const condition = true; 
const promise = new Promise( (resolve, reject) => {
    if(condition) {
        resolve('성공');
    }
    else {
        reject('실패');
    }
});
// 구현 된 생성사자 결과값을 message로 본낸다.
// 받고 난 후 다시 return 시 Promise객체를 리턴한다. 
// 다시 .then으로 이전  then에서 return한 Promise를 사용하여 계산한다.
promise 
    .then( (message) => {
        return new Promise( (resolve, reject) => {
            // 로직 구현
            resolve(message);
        })
        .then( (message2) => {
            console.log(message2);
            return new Promise( (resolve, reject) => {
                resolve(message3);
            });
        })
        .then((message3) => {
            console.log(message3);
        })
        .catch((err) =>{
            console.log(err);
        });
    });
// out : 성공

// 무조건 실패
const promis = new Promise( (res, rej) => {
    rej("실패");
});

// 무조건 성공 
const sucessPromise = Promise.resolve('성공'); // catch 쓸 필요 없어 
// 무조건 실패
const failuerPromise = Promise.reject('실패'); // then 쓸 필요 없어
