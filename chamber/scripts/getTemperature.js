const temperature = document.querySelector("#currentTemperature");
const weatherDescription = document.querySelector("#descriptionWeather");
const apiKey = "3ced008307a00fa96aa3992218fa98f6";
const uncramblePredictionList = document.querySelector("#weather-forecast");
const predictionsQuantity = 3;
const oneDaySpaceHours = 8;

const url = `https://api.openweathermap.org/data/2.5/weather?lat=-0.239&lon=-78.522&appid=${apiKey}`;
const urlPredictions = `https://api.openweathermap.org/data/2.5/forecast?lat=-0.239&lon=-78.522&appid=${apiKey}`;

async function getTemperature() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      const celcious = data.main.temp - 273;
      temperature.innerHTML = celcious.toFixed(2);
      weatherDescription.innerHTML = data.weather[0].description.toUpperCase();
    }
  } catch (error) {
    console.log(error);
  }
}

async function getPredictions() {
  try {
    const response = await fetch(urlPredictions);

    if (response.ok) {
      const data = await response.json();

      let predictions = [];

      for (let i = 1; i <= predictionsQuantity; i++) {
        let lastItem = oneDaySpaceHours * i;
        let firstItem = lastItem - oneDaySpaceHours;

        let newLi = document.createElement("li");
        let h3 = document.createElement("h3");
        newLi.classList.add('prediction');
        h3.innerHTML = `Day ${i}`;
        h3.classList.add('prediction-title');
        newLi.appendChild(h3);

        let newDayPredictions = [];
        for (let j = firstItem; j < lastItem; j++) {
          let celcious = data.list[j].main.temp - 273;
          let p = document.createElement("p");
          p.innerHTML = `${celcious.toFixed(2)} C`;
          newLi.appendChild(p);
        }

        uncramblePredictionList.appendChild(newLi);

        predictions.push({ day: i, dayPredictions: newDayPredictions });
      }
      //console.log(predictions);
    }
  } catch (error) {
    console.log(error);
  }
}

getTemperature();
getPredictions();
