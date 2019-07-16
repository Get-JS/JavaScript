const colockContainer = document.querySelector(".js-clock");
const clockTitle = colockContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText =
     `
        ${hours < 10 ? `0${hours}`: hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 9 ? `0${seconds}` : seconds}
    `;
}

function init(){
    getTime();
    setInterval(getTime, 1000);
}

init();

/*
Date
    const date = new Date();
    console.log(date);
    date.getDate();
    date.getHours();
    date.getMinutes();
*/

/*
setInterval
    function sayHi(){
        console.log("say hi");
    }
    setInterval(sayHi, 3000);
*/
