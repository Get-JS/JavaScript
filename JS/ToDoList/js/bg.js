const body = document.querySelector("body");

const IMG_NUMBER = 7;

// function handleImgLoad() {
//     console.log("finished loading");
// }

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);

    // table listener를 이미지화 하기 위해 even listener를 연결
    // but, API에서 나온게 아니기 때문에 로딩이 안된다..
    // image.addEventListener("loadend", handleImgLoad);

}

function getRandom() {
    // Math.ceil , Math.random , Math.floor
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init() {
    const randomNumber = getRandom();
    paintImage(randomNumber);
}

init();