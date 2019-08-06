const data = [
    {
        name : 'coffe-bean',
        order :true,
        items : ['americano', 'milk', 'green-tea']
    },
    {
        name : 'starbucks',
        order : false,
    },
    {
        name : 'coffe-King',
        order :true,
        items : ['americano', 'latte']
    },
]

// json으로 응답을 받고,
// javascript object로 변환한 후에 
// 어떠한 데이터처리 조작을 한 후에 dom에 추가 하는 일
// 데이터 + HTML문자열의 결ㅎ바이 필요하기 때문에

// 각각의 key가 다르기 때문에 좋지 않은 코드 
const template = `<div>welcome ${data[0].name} !!</div>`;
console.log(template);


// Tagged Template literals 
function fn(tags , name, items) {
    console.log(tags);
    if(typeof items === "undefined"){
        items =  "<span style = 'color : red'> 주문가능한 상품이 없습니다. </span>";
    }
    return (tags[0] + name + tags[1] + items + tags[2]);
}

data.forEach((V) => {
    let template = fn`<h1> welcome ${V.name} !! </h1>
    <h2>주문가능항목</h2><div>${V.items}</div>`;
    document.querySelector("#message").innerHTML += template;
});





