Users.findOne('zero')
    .then((user) => {
        console.log(user);
        return Users.update('zero', 'nero');
    })
    .then((updateUser) => {
        console.log(updateUser);
        return Users.remove('nero');
    })
    .then((removeUser) => {
        console.log(removeUser);
    })
    .catch((err) => {
        console.error(error);
    });
console.log("다 찾았니?");
// * console.log가 더 빨리 출력이 된다.
// * then보다 더 빨리 출력이된다는것은 순서가 이루어져있지 않다..

//-------------------------------------------------
/*
    * async () => {
    *     const 변수 = await 값
    * }
*/
// * 동기식으로 보이기 때문에 코드 순서와 실행 순서가 같다.
// * 에러 처리를 위해 await을 try catch문으로 감싼다.
// * try{} catch(error) {}

// * const func = async() => {}
async function func(){
    try {
        const user = await USers.findOne('zero');
        console.log(user);
        const updatedUser = await Users.update('zero', 'nero');
        console.log(updateUser);
        const removedUser = await Users.remove('nero');
        console.log('다 찾았다');
    } catch (err) {
        console.error(err);
    }
};

func();