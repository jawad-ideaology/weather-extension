import React, { useEffect } from "react";
import { fetchOpenWeatherData } from "../../utils/api";

export const WeatherCard: React.FC<{ city: string }> = ({ city }) => {
  useEffect(() => {
    fetchOpenWeatherData(city)
      .then((data) => console.log("Res from api", data))
      .catch((err) => console.log("Error", err));
  }, []);
  return <div>{city}</div>;
};
