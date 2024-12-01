




const apiKey = "e710e7aea59262f7e1621bc2cc4dca98";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city) {
    const res = await fetch(`${apiUrl}&q=${city}&appid=${apiKey}`);

    var data = await res.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".description").innerHTML = data.weather[0].description;
    document.querySelector(".temp").innerHTML = "Temperature: " + Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = "humidity: " + data.main.humidity + "%";
    document.querySelector(".wind-speed").innerHTML ="wind speed: " + data.wind.speed + " km/h";
  
    
}

searchBtn.addEventListener("click", () =>{
    checkWeather(searchBox.value);
});






