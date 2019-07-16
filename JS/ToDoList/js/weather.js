const weather = document.querySelector(".js-weather");

const API_KEY = "e3df05afae839adcb4ee1df9d44d910a";
const CORDS = 'coords';

// javascript는 웹사이트로 Request를 보내고 응답을 통해서 데이터를 얻을 수 있는데 
// 가져온 데이터를 Refresh없이도 나의 웹사이트에 적용시킬 수 있기때문에 흥흥 함
// javascript는 보이지 않은 곳에서 데이터를 가져온다. 

function getWeather(lat , lng) {
    // then : 데이터가 완전히 들어온 다음 호출한다.
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metic`
    )
    .then(function(response) { 
        // json data 가져오기 
        return response.json();
    })
    .then(function(json) {
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`;
    });

}

function saveCoordsd(coordsObj) {
    localStorage.setItem(CORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position) {
    console.log(position.coords.latitude);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        // 겍체의 키와 변수가 같다면
        latitude,
        longitude
    };
    saveCoordsd(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError() {
    console.log("Can't access geo location");
}

function askForkCoords() {
    // using API 
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords() {
    const loadedCords = localStorage.getItem(CORDS);
    // console.log(loadedCords);
    if(loadedCords === null){
        askForkCoords();
    }else{
       // getWeather 
       const parseCoords = JSON.parse(loadedCords);
       //console.log(parseCoords);
       getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init() {
    loadCoords();
}

init();