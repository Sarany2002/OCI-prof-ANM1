// API Key for OpenWeather API (Replace with your own API key)
const apiKey = 'YOUR_API_KEY';

async function getWeather() {
    const city = document.getElementById('city').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.cod === '404') {
            alert('City not found!');
            return;
        }

        const cityName = data.name;
        const temperature = `${data.main.temp} °C`;
        const weatherDescription = data.weather[0].description;
        const humidity = `Humidity: ${data.main.humidity}%`;
        const windSpeed = `Wind Speed: ${data.wind.speed} m/s`;

        document.getElementById('city-name').innerText = cityName;
        document.getElementById('temperature').innerText = temperature;
        document.getElementById('weather-description').innerText = weatherDescription;
        document.getElementById('humidity').innerText = humidity;
        document.getElementById('wind-speed').innerText = windSpeed;
    } catch (error) {
        alert('Error fetching weather data');
    }
}
