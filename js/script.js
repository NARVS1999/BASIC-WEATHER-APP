const apiKey = 'b7c6f147d3c04738a97123159242710'; // Replace with your WeatherAPI key
const apiUrl = 'http://api.weatherapi.com/v1/current.json';

document.getElementById('searchButton').addEventListener('click', () => {
    const location = document.getElementById('locationInput').value;
    fetchWeather(location);
});

function fetchWeather(location) {
    const url = `${apiUrl}?key=${apiKey}&q=${location}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById('location').textContent = data.location.name;
            document.getElementById('temperature').textContent = `${data.current.temp_c}°C`;
            document.getElementById('description').textContent = data.current.condition.text;
            document.getElementById('image-container').style.backgroundImage = `url('${data.current.condition.icon}')`;
        })
        .catch(error => console.error('Error fetching weather data:', error));
}