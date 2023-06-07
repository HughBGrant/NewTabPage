const weather = document.querySelector(".weather");
const content = weather.querySelector("span");
const API_KEY = "f417f1ae4cf331bb82e2ff33082fc3c3";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const img = document.createElement("img");
            img.setAttribute(
                "src",
                `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
            );
            content.innerText = `${Math.floor(data.main.temp)}ºC\n${
                data.weather[0].main
            }`;
            weather.prepend(img);
        });
}

function onGeoError() {
    content.innerText = "위젯";
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
