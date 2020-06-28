// 3. Destructuring 활용 JSON파싱
var news = [
    {
        "title" : "sbs",
        "image" : "https://",
        "newslist" : [
            "[가나다] 가나다",
            "가나다 [가나다]"
        ]
    },
    {
        "title" : "mbc",
        "image" : "https://",
        "newslist" : [
            "[라마바사] 라마바사",
            "라마바사 [라마바사]"
        ] 
    }
];

/*
    let [, mbc] = news; 
    let { title, image} = mbc;
    console.log(title , image);
*/

// 1. 위의 로직을 개선 방향 
// 위의 값을 한방에 뽑는 방법 
// 한줄을 줄여줌 !!! 완전 우아하네 ~~
let [, {title, image}] = news;
console.log(image);

// 2. 또다른 방법
// 매개변수에서 destructuring
// newslist만 출력
function getNewsList([, {newslist}]) {
    console.log(newslist);
}
getNewsList(news);