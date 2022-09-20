import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control"
            ></input>
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

      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="sunny"
              className="float-left"
            ></img>
            <div className="float-left">
              <span className="temperature">6</span>
              <span className="units"> °C</span>
            </div>
          </div>
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
  );
}
