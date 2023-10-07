document.addEventListener('DOMContentLoaded', function () {
    const cityName = document.getElementById('cityName');
    const temperature = document.getElementById('temperature');
    const humidity = document.getElementById('humidity');
    const windSpeed = document.getElementById('windSpeed');
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');

    // Function to fetch weather data based on city name (you can use your API)
    function fetchWeatherData(city) {
        const apiKey = 'YOUR_API_KEY';
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${a3d179677347c576b3674b4cc3cba3cd}`)
            .then(response => response.json())
            .then(data => {
                cityName.textContent = data.name;
                temperature.textContent = `Temperature: ${data.main.temp}°C`;
                humidity.textContent = `Humidity: ${data.main.humidity}%`;
                windSpeed.textContent = `Wind Speed: ${data.wind.speed} km/h`;
            })
            .catch(error => console.error(error));
    }

    // Event listener for the search button
    searchButton.addEventListener('click', () => {
        const city = searchInput.value.trim();
        if (city !== '') {
            fetchWeatherData(city);
        }
    });
});
