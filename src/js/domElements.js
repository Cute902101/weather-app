export function createHourlyElements() {
    const parentDiv = document.querySelector(".hourly-container");
  
    for (let i = 0; i < 24; i++) {
      // Create the main container div
      const hourlyDiv = document.createElement("div");
      hourlyDiv.className = "hourly p-4";
      hourlyDiv.textContent = "hour";
  
      // Create the grid div
      const gridDiv = document.createElement("div");
      gridDiv.className = "grid p-4";
  
      // Create the image element
      const img = document.createElement("img");
      img.className = "hourly-condition-img";
      img.src = "#";
      gridDiv.appendChild(img);
  
      // Create the condition heading
      const conditionHeading = document.createElement("h1");
      conditionHeading.className = "hourly-condition-text";
      conditionHeading.textContent = "(condition)";
      gridDiv.appendChild(conditionHeading);
  
      // Create the precipitation paragraph
      const precipitationPara = document.createElement("p");
      precipitationPara.className = "hourly-precipitaion";
      precipitationPara.textContent = "(precipitation)";
      gridDiv.appendChild(precipitationPara);
  
      // Create the humidity paragraph
      const humidityPara = document.createElement("p");
      humidityPara.className = "hourly-humidity";
      humidityPara.textContent = "(humidity)";
      gridDiv.appendChild(humidityPara);
  
      // Create the wind paragraph
      const windPara = document.createElement("p");
      windPara.className = "hourly-wind";
      windPara.textContent = "(wind)";
      gridDiv.appendChild(windPara);
  
      // Append the grid div to the hourly div
      hourlyDiv.appendChild(gridDiv);
  
      // Append the hourly div to the parent div
      parentDiv.appendChild(hourlyDiv);
    }
  }

  