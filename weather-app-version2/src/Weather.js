import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    setWeatherData({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      description: response.data.weather[0].description,
      date: "Thursday, 2:00 pm",
      icon: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    });
    console.log(response.data);
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <form>
          <div className="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Enter a city..."
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button class="btn btn-primary" type="button">
              Search
            </button>
          </div>
        </form>
        <h2>{weatherData.city}</h2>
        <p className="date-time">{weatherData.date}</p>
        <div className="temperature">
          <img
            src={weatherData.icon}
            alt={weatherData.description}
          />

          <h1>{Math.round(weatherData.temperature)}°</h1>
          <p className="text-capitalize">{weatherData.description}</p>
        </div>
        <div className="row">
          <div className="col-6">
            Humidity: {Math.round(weatherData.humidity)}%
          </div>
          <div className="col-6">Wind: {Math.round(weatherData.wind)} km/h</div>
        </div>
      </div>
    );
  } else {
    const apiKey = "50fa4024e3b1d5eac2f51ab18a47e997";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}
    &appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return "Loading..";
  }
}
