import React, { useState } from 'react';
import axios from 'axios';

const Weather2 = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const apiKey = import.meta.env.VITE_API_KEY; // Replace with your actual API key

  const fetchWeather = async () => {
    setLoading(true);
    setError(null);
    setWeather(null);
    try {
      const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
          q: city,
          appid: apiKey,
          units: 'metric',
        },
      });
      setWeather(response.data);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
        />
        <button type="submit">Get Weather</button>
      </form>

      {loading && <div className="loading">Loading...</div>}
      {error && <div className="error">Error: {error.message}</div>}
      {weather && (
        <div className="weather-info">
          <h1>Weather in {weather.name}</h1>
          <p>Temperature: {weather.main.temp} °C</p>
          <p>Weather: {weather.weather[0].description}</p>
          <p>Humidity: {weather.main.humidity}%</p>
        </div>
      )}
    </div>
  );
};

export default Weather2;