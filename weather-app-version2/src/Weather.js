import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  const [temperature, setTemperature] = useState("");
  const [ready, setReady] = useState(false);

  function handleResponse(response) {
    setTemperature(response.data.main.temp);
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
        <h2>Manila</h2>
        <p className="date-time">Tuesday, 2:00 PM</p>
        <div className="temperature">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Mostly sunny"
          />

          <h1>{Math.round(temperature)}°</h1>
          <p>Mostly sunny</p>
        </div>
        <div className="row">
          <div className="col-6">Humidity: 65%</div>
          <div className="col-6">Wind: 11km/h</div>
        </div>
      </div>
    );
  } else {
    const apiKey = "50fa4024e3b1d5eac2f51ab18a47e997";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Manila&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return "Loading..";
  }
}
