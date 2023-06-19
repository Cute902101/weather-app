
export const renderWeatherDataModule = (function () {
  // this loads the current weather data for into the DOM by passing apiData from
  // the async function fetchWeatherData
    function renderCurrentWeather(apiData) {
      const {
        current: {
          condition: { icon },
          temp_f,
          feelslike_f,
        condition:{ text },
          humidity,
          wind_dir,
          wind_mph,
        }
      } = apiData;

      let currentWeatherIcon = document.querySelector("[data-current-icon]");
      let currentTemp = document.querySelector("[data-current-temp]");
      let currentlyFeelsLike = document.querySelector("[data-current-feelslike]");
      let currentCondition = document.querySelector("[data-current-condition]");
      let currentHumidity = document.querySelector("[data-current-humidity]");
      let currentWind = document.querySelector("[data-current-wind]");
      console.log(apiData)
        currentWeatherIcon.src = icon
        currentTemp.innerText = temp_f;
        currentlyFeelsLike.innerText = feelslike_f;
        currentCondition.innerText = text;
        currentHumidity.innerText = humidity;
        currentWind.innerText = wind_dir + "/" + wind_mph + "mph";
    }
  // render hourly weather data into the DOM 
    function renderHourlyWeather (apiData) {
        let hourlyConditionIcon = document.querySelectorAll(".hourly-condition-img");
        let hourlyConditionText = document.querySelectorAll(".hourly-condition-text")
        let hourlyWeatherData = apiData.forecast.forecastday[0].hour;
        let currentHourArray = [];
        for (let i = 0; i < hourlyWeatherData.length; i++) {
          let currentHour = hourlyWeatherData[i].condition.icon;
          currentHourArray.push(currentHour);
          }  
           hourlyConditionIcon.forEach((element, index) => { 
            let icon = currentHourArray[index];
            element.src = icon;
           })

    }

    function renderDailyForecast () {

    }

    return {
      renderCurrentWeather,
      renderHourlyWeather,
    }
})()
  
  
  

