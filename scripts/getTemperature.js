const temperature = document.querySelector('#currentTemperature');
const weatherDescription = document.querySelector('#descriptionWeather');
const apiKey = "3ced008307a00fa96aa3992218fa98f6";
//const coordinates = navigator.geolocation.getCurrentPosition();
//console.log('coordinates', coordinates );
// const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.latitude}&lon=${coordinates.longitude}&appid=${apiKey}`;
const url = `https://api.openweathermap.org/data/2.5/weather?lat=-0.239&lon=-78.522&appid=${apiKey}`;

//console.log(temperature.innerHTML);

async function getTemperature(){
    try {
        const response = await fetch(url);
        //console.log('pure response', response);
        if(response.ok){
            const data = await response.json();
            //console.log('json format ', data );
            const celcious = data.main.temp - 273;
            temperature.innerHTML = celcious.toFixed(2);
            //console.log('celciuos temperature ', celcious.toFixed(2));
            weatherDescription.innerHTML = data.weather[0].description.toUpperCase();
        }
    } catch (error) {
        console.log(error);
    }
}

getTemperature();