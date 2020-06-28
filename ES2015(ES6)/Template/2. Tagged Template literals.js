// Tagged Template literals 
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
];

function fn(tags , name, items) {
    console.log('tags : ',tags);
    console.log('name : ',name);
    console.log('items : ',items);
    if(typeof items === "undefined"){
        items =  "<span style = 'color : red'> 주문가능한 상품이 없습니다. </span>";
    }
    return (tags[0] + name + tags[1] + items + tags[2]);
}

data.forEach((V) => {
    let template = fn`<h1> welcome ${V.name} !! </h1>
    <h2>주문가능항목</h2><div>${V.items}</div>`;
    console.log(template);
    document.querySelector("#message").innerHTML += template;
});


