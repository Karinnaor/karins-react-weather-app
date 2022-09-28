import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temp = Math.round(props.data.temp.max);
    return `${temp}°`;
  }
  function minTemp() {
    let temp = Math.round(props.data.temp.min);
    return `${temp}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div className="WeatherForecast-day"> {day()} </div>
      <WeatherIcon code={props.data.weather[0].icon} size={36} color="white" />
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperture-max"> {maxTemp()}</span>
        <span className="WeatherForecast-temperture-min"> {minTemp()}</span>
      </div>
    </div>
  );
}
