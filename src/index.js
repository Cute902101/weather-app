const search = document.querySelector("[data-location-form]")

async function getWeather () {
  
  let response = await fetch("https://api.tomorrow.io/v4/weather/forecast?location=miami&timesteps=&units=metric&apikey=HKIjDqRqtwQNfMfZowUC78M6HCZocaCQ")
  let getData = await response.json();
  

}

search.addEventListener("submit", ()=>{
    
})