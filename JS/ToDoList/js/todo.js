// 이름 충돌 방지!!!
// list에 있는 모든 item을 위한 함수를 실행시크는 함수 -> forEach , fitler

const toDoForm = document.querySelector(".js-toDoForm"),
    toDoinput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS  = "toDos";

// 해야할 일을 생성했을 때  array에 추가 
let toDos = [];

function deleteToDo(event) {
    // 어떤 버튼을 눌렀는지 알아야 한다.
    // button의 parent는 li이다. 
    // lookup parent Node

    const btn = event.target;
    const li = btn.parentNode;
    // console.log(li);
    toDoList.removeChild(li);

    // filter는 array의 모든 아이템을 통해 함수를 실행하고 
    // 그리고 true 아이템들만 가지고 새로운 array를 만든다.   
    const cleanToDos = toDos.filter(function(toDo) {
        // li.id -> string
        // toDo.id -> Number
        // return toDo.id !== li.id;
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos() {
    // local storage에는, 자바스크립트의 data를 저장할 수가 없다.
    // 자바스크립트는 local storage에 있는 모든 데이터를 string으로 저장하려고 한다.
    // 그래서 object가 string이 되도록 만들어야 한다.
    // 그걸 위해서, JSON.stringify를 쓰는 트릭을 활용
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1; 

    delBtn.innerText = "X";
    span.innerText = text;
    // deletle Fucntion Listener
    delBtn.addEventListener("click", deleteToDo);
    // li(father element)안에 넣는다.
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;

    toDoList.appendChild(li);

    const toDoObj = {
        text : text,
        id : toDos.length + 1
    };
    toDos.push(toDoObj);
    saveToDos();

}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoinput.value;
    paintToDo(currentValue);
    toDoinput.value = "";
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        // console.log(loadedToDos);
        // JSON -> JavaScriptObectNotatiob
        // 데이터를 전달할 때, 자바스크립트가 그걸 다룰 수 있도록
        // object로 바꿔주는 기능인 셈이다.
        const parsedToDos = JSON.parse(loadedToDos);
        
        // array에 담겨 있는 것들 각각에 한번씩 함수를 실행시킨다.
        //forEach gives you the current item that is being processed. 
        // We just create that on the moment. 
        // It could be whatever word you want.
        parsedToDos.forEach(function(toDosList){
            paintToDo(toDosList.text);
        });
    }
    // form은 항상 showing이기 때문에 사실 할게 없다.
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();
