// css와 js작업 영역을 확실하게 나누기 

const title = document.querySelector("#title");

const CLICECKE_CLASS = "clicked";

function handleClick(){
   

    title.classList.toggle(CLICECKE_CLASS);

    // classList라는 Object의 메소드를 사용한다. 
    // 원하는 ClassName이 포함되어 있는지 확인
    /*
        const hasClass = title.classList.contains(CLICECKE_CLASS);
        if(!hasClass){
            title.classList.add(CLICECKE_CLASS);
        }
        else {
            title.classList.remove(CLICECKE_CLASS);
        }
    */

    // Original
    /*
        const currentClass = title.className;
        // 한개 클래스만 체크할 수 있다는 단 점
        if(currentClass !== CLICECKE_CLASS) {
            title.className = CLICECKE_CLASS;
        }
        else {
            title.className = "";
        }
    */
}

function init(){
    title.addEventListener("click", handleClick);
}
init();
