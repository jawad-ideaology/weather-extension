import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Testing } from "../components/Testing";
import WeatherCard from "../components/WeatherCard";
import { fetchOpenWeatherData } from "../utils/api";

// const App = <img src="ext.png" />;

const root = document.createElement("div");
document.body.appendChild(root);

const People = () => {
  return <div>PopUp</div>;
};

const App: React.FC<{}> = () => {
  return (
    <div>
      <WeatherCard city="Karachi" />
      {/* <h3>Hello world</h3>
      <People />
      <Testing /> */}
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
);
