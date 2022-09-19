import React from "react";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1> Weather Search </h1>
          <button className="btn btn-primary"> Yes? </button>
        </header>
        <footer>
          This project wad coded by Karin Naor, and is{" "}
          <a
            href="https://github.com/Karinnaor/karins-react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
