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
        <p className="text-gray-500 sm:text-lg text-center mb-6 md:mb-8">Date: {date}</p>
        <p className="text-gray-800 text-2xl sm:text-3xl font-bold text-center mb-4 md:mb-6">Weather: {weather}</p>
       
      </li>
    );
  });

  return (
    <div>
      <h1 className="text-gray-800 text-2xl sm:text-3xl font-bold text-center mb-4 md:mb-6">Weather forecast for Tokyo</h1>
      <ul>{weatherList}</ul>
    </div>
  );
}

export default Weather;

