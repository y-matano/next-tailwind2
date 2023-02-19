import React, { useState, useEffect } from 'react';

function Weather() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const res = await fetch('https://weather.tsukumijima.net/api/forecast/city/130010');
      const data = await res.json();
      setWeatherData(data);
    };

    fetchWeatherData();
  }, []);

  if (!weatherData) {
    return <div>Loading weather data...</div>;
  }

  const forecasts = weatherData.forecasts;

  const weatherList = forecasts.map((forecast) => {
    const date = forecast.date;
    const weather = forecast.telop;

    return (
      <li key={date}>
        <p>Date: {date}</p>
        <p>Weather: {weather}</p>
      </li>
    );
  });

  return (
    <div>
      <h1>Weather forecast for Tokyo</h1>
      <ul>{weatherList}</ul>
    </div>
  );
}

export default Weather;

