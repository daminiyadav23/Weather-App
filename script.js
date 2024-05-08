function getWeather() {
    const apiKey = 'YOUR-API-KEY';
    const city = document.getElementById('city').value;
    if (!city) { 
        alert('Please enter a city');
        return;  
    }
const currentWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}';
const currentWeatherUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}';
}
function getWeather() {

    fetch (currentWeatherUrl)
    .then(response => response.json())
    .then(data => {
        displayWeather(data);
    })
    .catch(error => {
        console.error('Error fetching current weather data:', error);
    alert('Error fetching current weather data. Please try again.');
});
fetch(forecaseUrl)
.then(response => response.json())
.then(data => {
    displayHourlyForecast(data.list);
})
.catch(error => {
    console.error('Error fetching current weather data:', error); 
    alert('Error fetching current weather data. Please try again.');
});
}
function displayWeather(data) {
     const tempDivInfo = document.getElementById('temp-div'); 
     const WeatherInfoDiv = document.getElementById('weather-info');
       const hourlyForecastDiv = document.getElementById('hourly-forecast');
 //clear previous content
 WeatherInfoDiv.innerHTML ='';
 hourlyForecastDiv.innerHTML = '';
 tempDivInfo.innerHTML = '';
}
function displayWeather(data) {
    if (data.cod == '404') {
        weatherInfoDiv.innerHTML = '<P>${data.message}</p>';
    }else {
        const cityName = data.name;
        const temperature = Math.round(daa.main.temp - 273.15);
        const description = data.weather[0].description;
        const iconCode = data.Weather[0].icon;
        const iconUrl = 'https://openweathermap.org/img/wn/${iconCode}@4x.png';

        const temperatureHTML = ' <p>${temperature}°C</p>';
     const weatherHtml ='<p>${cityName}</p> <p>${description}</p>';
     tempDivInfo.innerHTML = temperatureHTML;
     weatherInfoDiv.innerHTML = weatherHtml;
     weatherIcon.src = iconUrl;
     weatherIcon.alt = description;
     showImage();
    }
}
function displayHourlyForecast(hourlyData) {
    const HourlyForecastDiv = document.getElementById('hourly-forecast');
    const next24Hours = hourly.slice(0, 8);
    next24HourlyForecastDiv.forEach(item => {

        const dateTime = new Date(item.dt * 1000);
        const hour = dateTime.getHours();
        const temperature = Math.round(item.main.temp- 273.15);
        const iconCode = item.weather[0].icon;
        const iconUrl = 'https://openweathermap.org/img/wn/${iconCode}.png';

        const hourlyItemHtml = '<div class="hourly-item"> <span>$(hour}:00</span>
        <img src="${iconUrl}" alt="Hourly Weather Icon">
        <span>${temperature}°C</span>
        </div>
        ';
        hourlyForecastDiv.innerHTML += hourlyItemHtml;
    });
    function showImage() {
        const weatherIcon = document.getElementById('weather-icon');
        weather.style.display = 'block';
     }

