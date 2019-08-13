# Template

## 1. Template처리

__json으로 응답을 받고,__

`javascript object로 변환한 후에` 

어떠한 데이터처리 조작을 한 후에 dom에 추가 하는 일

__데이터 + HTML문자열의 결합이 필요하기 때문에__
```javascript
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

    // 각각의 key가 다르기 때문에 좋지 않은 코드 
    const template = `<div>welcome ${data[0].name} !!</div>`;
    console.log(template);
```

## 2. Tagged Template literals 
```javascript
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
```
