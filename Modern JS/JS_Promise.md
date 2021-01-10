# JS Promise

- [JS Promise](#js-promise)
  - [Promise 생성](#promise-생성)
  - [async await](#async-await)
  - [마이크로태스크](#마이크로태스크)

## Promise 생성

```js
const p1 = new Promsie((resolve, reject) => {
  // resolve() // p1 객체는 이행됨(fulfilled)
  // reject() // p1 객체는 거부됨(rejected)
  // exception 발생 => 거부됨
}); // 대기중(pending) 상태 return Promise
const p2 = Promise.reject(); // return Promise
const p3 = Promise.resolve(); // reeturn Promise
```

- new 키워드를 사용해서 프로미스를 생성하는 순간 생성자의 입력함수가 실행
- 만약 API 용청을 보내는 비동기 코드가 있다면 **프로미스가 생성되는 순간에** 요청을 보낸다.

```js
const p1 = Promise.resolve(123); // return Promise
Promise.resolve(p1) === p1; // Promise.resolve 함수에 프로미스가 입력되면 그 자신이 반환된다.
```

```js
requestData().then(onResolve, onReject); // 프로미스가 처리됨 상태가 되면 onResolve 함수가 호출 되고, 거부됨 상태가 되면 onRejct 함수가 호출
Promise.resolve(123).then((data) => console.log(data));
Promise.reject(123).then(null, (error) => console.log(error));
```

- 결과적으로 `then` 메서드는 **항상 프로미스를 반환한다.**
- 프로미스가 `거부됨 상태인` 경우에는 **onReject 함수가 존재하는 then을 만날때까지 이동한다.**

```js
Promise.reject(data)
  .then((then1) => console.log("then1", then1))
  .then((then2) => console.log("then2", then2))
  .then((then3) => console.log("then3", then3), (then4) => console.log("then4", then4));
  .then((then5) => console.log("then5", then5), (then6) => console.log("then6", then6));
```

- 거부된 상태인 프로미스는 처음으로 만나는 onReject 함수를 호출하므로 빈 코드 블록은 생략 된다.
- onReject 함수는 undefined를 결과로 가지면서 이행됨 상태인 프로미스를 생성한다.
- 따라서 then5가 출력된다.
- result: then4 ~ , then5 ~

```js
Promise.reject(data).catch((error) => console.log("error", error)); // catch 메서드는 then 메서드의 onReject 함수와 같은 역할을 한다.
Promise.reject(data)
  .catch((error) => error); // catch 메서드도 새로운 프로미스를 반환한다.
  .then((then) => console.log("then", then))
```

```js
new Promise(function (resolve, reject) {
  setTimeout(() => {
    throw new Error("에러 발생!");
  }, 1000);
}).catch(alert);
```

- `.catch는` 트리거 되지 않는다.
- 암시적 try, .. catch가 함수 코드를 감사고 있으므로 모든 동기적 에러는 암시적 try, ...catch에서 처리 된다.
- 하지만 여기에서 에러는 excutor(실행자, 실행 함수)가 실행되는 동안이 아니라 나중에 발생한다.
- **따라서 프로미스는 에러를 처리할 수 없다.**
- 하지만 `reject로` 호출했을 때는 `catch로` 전달이 된다.

```js
requestData()
  .then((data) => {})
  .catch((error) => {})
  .finally(() => {});
```

- finally는 처리됨 상태인 프로미스의 데이터를 건드리지 않고 추가 작업을 할 때 유용하게 쓰인다.
- requestData 함수의 반환값은 finally 메서드 호출 이전의 프로미스다.

```js
Promise.all([requestData(), requestData2()]).then(([data1, data2]) => {
  console.log("data1", data1);
  console.log("data2", data2);
}); // return Promise
```

- `Promise.all` 함수가 반화하는 프로미스는 입력된 **모든 프로미스가 처리됨 상태가** 되어야 처림됨 상태가 된다.
- 하나라도 거부됨 상태가 된다면 즉시, Promise.all 함수가 반환하는 프로미스도 거부됨 상태가 된다.
  > fetch를 사용해 호출 여러 개를 만들면, 그중 하나가 실패하더라도 호출은 계속 일어납니다.
  > 렇더라도 Promise.all은 다른 호출을 더는 신경 쓰지 않습니다. 프라미스가 처리되긴 하겠지만 그 결과는 무시됩니다.

```js
Promise.race([
  requestData(),
  new Promise((_, reject) => setTimeout(reject, 3000)),
])
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
```

- `Promise.race는` 여러 개의 프로미스 중에서 가장 빨리 처리된 프로미스를 반환하는 함수이다.
- requestData 함수가 3초 안에 데이터를 받으면 then 메서드가 호출, 그렇지 않으면 catch 메서드 호출

```js
function requestData(params) {
  const p = Promise.resolve(10); // 생성되자 마자 실행 => new reslovePromise(10)
  p.then(() => 20); // then 메서드는 기존 객체를 수정하지 않고, 새로운 프로미스를 반환한다. => new Thenalbe(()=> 20)
  return p;
}
requestData().then((v) => {
  console.log("v", v); // 10
});
```

- 프로미스는 `불변 객체다`.

```js
function requestData() {
  return Promise.resolve(10).then((v) => {
    return 20;
  });
}
requestData().then((v) => {
  console.log("v", v); // 20
});
```

## async await

```js
async function getData() {
  return 123;
} // return Promise
getData().then((data) => console.log("data", data)); // 123
```

- `async는` Promise 객체로 변환하여 리턴해주는 키워드이다.

```js
async function getData() {
  return Promise.resolve(123); // 프로미스의 then 메서드와 마찬가지로 async await 함수 내부에서 반환하는 값이 프로미스라면 그 객체를 그대로 반환
}
getData().then((data) => console.log(data)); // 123
```

```js
function requestData(value) {
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log("requestData", value);
      resolve(value);
    }, 100)
  );
}
async function getData() {
  const data1 = await requestData(10); // 프로미스가 처리됨 상태가 될 때까지 다음 코드를 실행하지 않는다. => .then 역할
  const data2 = await requestData(20);
  console.log("data1", data1);
  console.log("data2", data2);
  return [data1, data2];
}
getData(); // Promise
```

```js
async function getData() {
  const p1 = asyncFunc1();
  const p2 = asyncFunc2();
  // 두개의 프로미스가 생성되고 각자의 비동기 코드가 실행된다.
  const data1 = await p1; // await으로 프로미스가 생성된 후 기다리기 때문에 두 개의 비동기 함수가 병렬로 처리된다.
  const data2 = await p2;
}
async function getData() {
  const [data1, data2] = await Promise.all([asyncFunc1(), asyncFunc2()]);
}
```

```js
class TEX {
  then(resolve, reject) {
    setTimeout(() => resolve(1234), 10000);
  }
}
async function asyncFunc() {
  const result = await new TEX();
  console.log("result", result); // 1234
}
```

- `Thenable은` 프로미스처럼 동작하는 객체다.
- async await은 ES6의 프로미스가 아니더라도 then 메서드를 가진 객체를 **프로미스처럼 취급한다.**
- 프로미스가 아니더라도 then 메서드르 가진 객체를 Thenable이라고 부른다.

## 마이크로태스크

- 프로미스 핸들러 `.then/catch/finally는` 항상 비동기적으로 실행된다.
  > 프라미스가 즉시 이행되더라도 `.then/catch/finally` 아래에 있는 코드는 이 핸들러들이 실행되기 전에 실행됩니다.

```js
let promise = Promise.resolve();

promise.then(() => console.log("프로미스 성공!"));

console.log("코드 종료"); // 이 로그가 가장 먼저 나타난다.
```

> 요약하자면, 어떤 프라미스가 준비되었을 때 이 프라미스의 `.then/catch/finally` 핸들러가 마이크로태스크큐에 들어간다고 생각하시면 됩니다.
>
> 이때 핸들러들은 여전히 실행되지 않습니다. `현재 코드에서 자유로운 상태가 되었을 때에서야` 자바스크립트 엔진은 큐에서 작업을 꺼내 실행합니다.

> 비동기 작업을 처리하려면 적절한 관리가 필요합니다.
>
> 이를 위해 ECMA에선 PromiseJobs라는 내부 큐(internal queue)를 명시합니다.
>
> V8 엔진에선 이를 '마이크로태스크 큐(microtask queue)'라고 부르기 때문에 이 용어가 좀 더 선호됩니다.

- JS_Engine 참고

```js
let promise = Promise.reject(new Error("프로미스 실패!"));
setTimeout(() => promise.catch((err) => alert("잡았다!")), 1000);

// Error: 프로미스 실패!
window.addEventListener("unhandledrejection", (event) => alert(event.reason));
```

- `unhandledrejection은` 마이크로태스크 큐에 있는 작업 모두가 완료되었을 때 생성된다.
  - `.catch`같이 `에러 헨들러가` 없다면 마이크로태스크 큐는 계속해서 에러 핸들러를 처리하고 요청을 하기 때문에 뒤에있는 테스크가 쌓이게 된다.
  - 그것을 맞기위해 `unhandlerrejection을` `트리거` 하여 에러를 처리하도록 요청한다.
- 위 예시를 실행하면 setTimeout을 사용해 추가한 `.catch` 역시 트리거 된다.
  - 다만 `.catch는` `unhandledrejection이` 발생한 이후에 트리거 되므로 `프로미스 실패!가 출력된다.`
