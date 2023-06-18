

const apiDataModule = (function () {
    let apiData = {};
  
    function setApiData(data) {
      apiData = { ...data };
    }
  
    function consoleData() {
        console.log(apiData)
    }

    function renderCurrentWeather() {
      let currentIcon = document.querySelector("[data-current-icon]");
      let currentTemp = document.querySelector("[data-current-temp]");
      let feelsLike = document.querySelector("[data-current-feelslike]");
      let currentPrecipitation = document.querySelector("[data-current-precipitation]");
      let currentHumidity = document.querySelector("[data-current-humidity]")
      let currentWind = document.querySelector("[data-current-wind]")
      
        currentIcon.src = apiData.current.condition.icon
        currentTemp.innerText = apiData.current.temp_f
        feelsLike.innerText = apiData.current.feelslike_f
        // currentPrecipitation.value = apiData.current.
        currentHumidity.innerText = apiData.current.humidity
        currentWind.innerText = apiData.current.wind_dir + "/" + apiData.current.wind_mph + "mph"
    }

    function renderHourlyWeather () {
        let hourlyConditionIcon = document.querySelectorAll(".hourly-condition-img");
        let hourlyWeatherData = apiData.forecast.forecastday[0].hour;
        let currentHourArray = [];
        for (let i = 0; i < hourlyWeatherData.length; i++) {
          let currentHour = hourlyWeatherData[i].condition.icon;
          currentHourArray.push(currentHour)
            
          }  
          console.log(currentHourArray)
           hourlyConditionIcon.forEach((element, index) => { 
            let icon = currentHourArray[index];
            element.src = icon;
            
           })

    }

    return {
      
      consoleData,
      setApiData,
      renderCurrentWeather,
      renderHourlyWeather,
      
    };
  })();
  
  export default apiDataModule;
  

// export function log () {
//     const hour = document.querySelectorAll(".hourly")
//     console.log(hour)
    
// }

// export function renderCurrentWeatherIcon (getData) {
//     currentIcon.src = getData.current.condition.icon
//   }
  
//  export function renderCurrentTemp (getData) {
//     currentTemp.innerText = getData.current.temp_f + "°F"
//  }