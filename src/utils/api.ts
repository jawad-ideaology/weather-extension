const OPEN_WEATHER_API_KEY = "e1aeeb160e946cc9bc8e660be59017b9";

export interface OpenWeatherType {
  name: string;
  main: {
    feels_like: number;
    humidity: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  weather: {
    description: string;
    icon: string;
    id: number;
    main: string;
  }[];
  wind: {
    deg: number;
    speed: number;
  };
}

export const fetchOpenWeatherData = async (
  city: string
): Promise<OpenWeatherType> => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${OPEN_WEATHER_API_KEY}`
  );
  if (!res.ok) {
    throw new Error("City not found");
  }

  const data: OpenWeatherType = await res.json();
  return data;
};
