const li_list = document.querySelectorAll("ul li");

function print() {
    /*
     filter, includes, from을 사용해서 문자열 'e'가 포함된 
     노드로 구성된 배열을 만들어서 반환하기
    */
    const li_arr = Array.from(li_list);
    const result = li_arr.filter(function(value) {
       return value.innerHTML.includes("e");
    });
    console.log(result);
}
print();


function print() {
    /*
     filter, includes, from을 사용해서 문자열 'e'가 포함된 
     노드로 구성된 배열을 만들어서 반환하기
    */
    let list = document.querySelectorAll("li");
    // 타입 체크 하기
    // Object NodeList 출력
    console.log(toString.call(list));

    let listArray = Array.from(list); // li노드로 구성된 배열
    // Object Array 출력
    console.log(toString.call(listArray));
    
    let eArray = listArray.filter(function(v) {
        return v.innerText.includes("e");
    });
    console.log(eArray.length);

    console.log(eArray);
    return eArray;
}
console.log(print());
