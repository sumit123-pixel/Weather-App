const BASE_URL = //{your api here}
const TempC = document.querySelector("#temp-C h1");
const TempF = document.querySelector("#temp-F p")
const Humidity = document.querySelector("#humidity p")
const WindSpeed = document.querySelector("#windspeed p");
const btn = document.querySelector("#form button");
const loc = document.querySelector("#form input");


btn.addEventListener("click", async (event)=>{
    event.preventDefault();
    console.log("clicked");
    const city = loc.value;
    const apiURL = `${BASE_URL}${city}`
    console.log(apiURL);
    const res = await fetch(apiURL);
const data = await res.json();
console.log(data.current.temp_c);
    TempC.innerText = data.current.temp_c;
    TempF.innerText = `Tempreture in Farenhiet: ${data.current.temp_f}`;
    Humidity.innerText = `Humidity: ${data.current.humidity}`
    WindSpeed.innerText = `Wind Speed: ${data.current.wind_kph} kph`
})