const weather = document.querySelector(".js-weather");

const API_KEY="84e4cd6c9f7bddb5a78832ae21012317";
const COORDS = 'coords';

function getweather(lat,lng){
    fetch(
        `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    )
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
    const temperature = json.main.temp;
    const place = json.name;
    console.log(json);
    weather.innerText= `${temperature}°C  ${place}`;
    });
}

function savecoords(coordsOBJ){
    localStorage.setItem(COORDS, JSON.stringify(coordsOBJ));
}

function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsOBJ = {
        latitude,
        longitude
    };
    savecoords(coordsOBJ);
    getweather(latitude,longitude)
}

function handleGeoError(){
    console.log('Cant access geo location');
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces,handleGeoError);
}

function loadcoords(){
    const loadedcoords = localStorage.getItem(COORDS);
    if(loadedcoords === null){
        askForCoords();
    } else{
        const parsecoords = JSON.parse(loadedcoords);
        getweather(parsecoords.latitude, parsecoords.longitude);
    }
}

function init(){
    loadcoords();

}

init();