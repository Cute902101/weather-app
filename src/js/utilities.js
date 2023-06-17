const currentIcon = document.querySelector("[data-current-icon]");
const currentTemp = document.querySelector("[data-current-temp]");

const apiDataModule = (function () {
    let apiData = {};
  
    function setApiData(data) {
      apiData = { ...data };
    }
  
    function getCurrentIcon() {
      
    }
  
    function getCurrentTemp() {
      return apiData.currentTemp
    }

    return {
      
      setApiData,
      getCurrentIcon,
      getCurrentTemp,
      
    };
  })();
  
  export default apiDataModule;
  

export function log () {
    const hour = document.querySelectorAll(".hourly")
    console.log(hour)
    
}

export function renderCurrentWeatherIcon (getData) {
    currentIcon.src = getData.current.condition.icon
  }
  
 export function renderCurrentTemp (getData) {
    currentTemp.innerText = getData.current.temp_f + "°F"
 }