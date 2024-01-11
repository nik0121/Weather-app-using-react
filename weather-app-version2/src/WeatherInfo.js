import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
    return (
      <div className="WeatherInfo">
        <h2>{props.data.city}</h2>
        <p className="date-time">
          <FormattedDate date={props.data.date} />
        </p>
        <div className="temperature">
          <img src={props.data.icon} alt={props.data.description} />

          <h1>{Math.round(props.data.temperature)}°</h1>
          <p className="text-capitalize">{props.data.description}</p>
        </div>
        <div className="row">
          <div className="col-6">
            Humidity: {Math.round(props.data.humidity)}%
          </div>
          <div className="col-6">Wind: {Math.round(props.data.wind)} km/h</div>
        </div>
      </div>
    );
}