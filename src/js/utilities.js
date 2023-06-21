
 
  // this loads the current weather data into the DOM by passing apiData from
  // the async function fetchWeatherData
    function renderCurrentWeather(apiData) { 
      let currentWeatherIcon = document.querySelector("[data-current-icon]");
      let currentTemp = document.querySelector("[data-current-temp]");
      let currentlyFeelsLike = document.querySelector("[data-current-feelslike]");
      let currentCondition = document.querySelector("[data-current-condition]");
      let currentHumidity = document.querySelector("[data-current-humidity]");
      let currentWind = document.querySelector("[data-current-wind]");
      // learned to destructure the apiData object to make referencing properties more
      // readable.
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
      
        currentWeatherIcon.src = icon
        currentTemp.innerText = temp_f;
        currentlyFeelsLike.innerText = feelslike_f;
        currentCondition.innerText = text;
        currentHumidity.innerText = humidity;
        currentWind.innerText = wind_dir + "/" + wind_mph + "mph";
        console.log(apiData);
    }

    // load hourly api data into the DOM
    function renderHourlyWeather(apiData) {
      const hourlyHeading = document.querySelectorAll(".hourly-heading")
      const hourlyConditionIcon = document.querySelectorAll(".hourly-condition-img");
      const hourlyConditionText = document.querySelectorAll(".hourly-condition-text");
      const hourlyPrecipitation = document.querySelectorAll(".hourly-precipitation");
      const hourlyWind = document.querySelectorAll(".hourly-wind");
      const hourlyUvIndex = document.querySelectorAll(".hourly-uvs")
      const hourlyCurrentWeatherData = apiData.forecast.forecastday[0].hour;
      
      hourlyCurrentWeatherData.forEach((hour, index) => {
        const { condition, chance_of_rain, time, uv, wind_dir, wind_mph } = hour; 
        const { text, icon } = condition
    
        hourlyHeading[index].innerText = getHourFromTime(time);
        hourlyConditionIcon[index].src = icon;
        hourlyConditionText[index].innerText = text;
        hourlyPrecipitation[index].innerText = "Precipitation: " + chance_of_rain + "%";
        hourlyWind[index].innerText = "Wind: " + wind_dir + "/" + wind_mph
        hourlyUvIndex[index].innerText = "UV Index: " + uv
      });

      // convert time data into AM - PM format
        function getHourFromTime(time) {
                  let hour = parseInt(time.split(" ")[1].split(":")[0]);
                    if (hour == 0){
                      return 12 + "AM"
                    } else if (hour == 12) {
                      return 12 + "PM"
                    } else if (hour < 12) {
                      return hour + "AM"
                    } else if (hour > 12) {
                      return hour - 12 + "PM"
                    } else
                      return hour ;
                } 
              }
     

    function renderDailyForecast(apiData) {
      const dailyForecastDate = document.querySelectorAll(".forecast-date");
      const dailyForecastConditionImg = document.querySelectorAll(".forecast-condition-img");
      const dailyForecastConditionText = document.querySelectorAll(".forecast-condition-text");
      const dailyForecastPrecipitation = document.querySelectorAll(".forecast-precipitation");
      const dailyForecastTemperature = document.querySelectorAll(".forecast-average-temp");

      const dailyForecastData = apiData.forecast.forecastday;
      
      const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const currentDay = new Date().getDay()
      const currentDayStr = [...weekdays.slice(currentDay), ...weekdays.slice(0, currentDay)];
        dailyForecastData.forEach((forecastday, index) => {
          const { day } = forecastday;
          const { condition, daily_chance_of_rain, maxtemp_f, mintemp_f } = day;
          const { text, icon } = condition;

          let dateHeading = currentDayStr[index];
          dailyForecastDate[index].innerText = dateHeading; 
          dailyForecastConditionImg[index].src = icon;
          dailyForecastConditionText[index].innerText = text;
          dailyForecastPrecipitation[index].innerText = "Chance of rain: " + daily_chance_of_rain + "%";
          dailyForecastTemperature[index].innerText = maxtemp_f + "°F" + " - " + mintemp_f + "°F";
        })

      
      console.log(currentDayStr)
    
      
    }


    export {
      renderCurrentWeather,
      renderHourlyWeather,
      renderDailyForecast,
    }

  
  
  

