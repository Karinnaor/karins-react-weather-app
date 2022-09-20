import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="container">
      <div className="weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input type="search" placeholder="Enter a city"></input>
            </div>
            <div className="col-3">
              <input
                type="submit"
                className="btn btn-primary"
                value="Search"
              ></input>
            </div>
          </div>
        </form>
        <h1>New York</h1>
        <ul>
          <li>Tuesday, 9:00</li>
          <li>Sunny</li>
        </ul>

        <div className="row">
          <div className="col-6">
            <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"></img>
            <h2>6°C</h2>
          </div>
          <div className="col-6">
            <ul>
              <li>Percipitation 15%</li>
              <li>Humidity 83%</li>
              <li>Wind 10 km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
