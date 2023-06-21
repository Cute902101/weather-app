export function createHourlyElements() {
    const parentDiv = document.querySelector(".hourly-container");
  
    for (let i = 0; i < 24; i++) {
      // create the main container div
      const hourlyDiv = document.createElement("div");
      hourlyDiv.className = "p-4";
  
      // create grid div
      const gridDiv = document.createElement("div");
      gridDiv.className = "grid p-4";

      // create the hour as heading for hourly data  
      const hourHeading = document.createElement("h1");
      hourHeading.className = "hourly-heading font-bold";
      hourHeading.textContent = "hour"
      gridDiv.appendChild(hourHeading);
        
      // create the image element
      const img = document.createElement("img");
      img.className = "hourly-condition-img";
      img.src = "#";
      gridDiv.appendChild(img);
  
      // create the condition heading
      const conditionHeading = document.createElement("h1");
      conditionHeading.className = "hourly-condition-text";
      conditionHeading.textContent = "(condition)";
      gridDiv.appendChild(conditionHeading);
  
      // create the precipitation paragraph
      const precipitationPara = document.createElement("p");
      precipitationPara.className = "hourly-precipitation";
      precipitationPara.textContent = "(precipitation)";
      gridDiv.appendChild(precipitationPara);
      
      // create the wind paragraph
      const windPara = document.createElement("p");
      windPara.textContent = "(wind)";
      windPara.className = "hourly-wind";
      gridDiv.appendChild(windPara);
      
      // create the uv index paragraph
      const uvIndexPara = document.createElement("p");
      uvIndexPara.className = "hourly-uvs";
      uvIndexPara.textContent = "(UV)";
      gridDiv.appendChild(uvIndexPara);
  
     
  
      // Append the grid div to the hourly div
      hourlyDiv.appendChild(gridDiv);
  
      // Append the hourly div to the parent div
      parentDiv.appendChild(hourlyDiv);
    }
  }

  