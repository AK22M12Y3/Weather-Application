document.getElementById("get-weather").addEventListener("click", function () {
    const city = document.getElementById("city-input").value;

    // Your OpenWeather API key
    const apiKey = "e8d39986ef7aa27450dc8960a834704d"; // Replace with your actual API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            const weatherInfo = `
                <h2>${data.name}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Wind: ${data.wind.speed} m/s</p>
                <p>Description: ${data.weather[0].description}</p>
            `;
            document.getElementById("weather-info").innerHTML = weatherInfo;
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
            document.getElementById("weather-info").innerHTML =
                "<p>Unable to fetch weather data. Please try again.</p>";
        });
});
