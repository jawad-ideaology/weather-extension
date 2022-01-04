import React, { useEffect, useState } from "react";
import { fetchOpenWeatherData, OpenWeatherType } from "../../utils/api";
import { Typography } from "@material-ui/core/";
import { Theme, makeStyles, Card, CardContent } from "@material-ui/core";

interface CITY_P {
  name: string;
  main: {
    temp: number;
    feels_like: number;
  };
}

export const WeatherCard: React.FC<{ cityData: CITY_P }> = ({ cityData }) => {
  // const [weatherData, setWeatherData] = useState<OpenWeatherType | null>(null);
  const classes = useStyles();

  // useEffect(() => {
  //   fetchOpenWeatherData(city)
  //     .then((data) => {
  //       console.log("Data", data);
  //       setWeatherData(data);
  //     })
  //     .catch((err) => console.log("Error", err));
  // }, []);

  // if (!weatherData) {
  //   return <div>Loading</div>;
  // }

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" className={classes.root}>
          {cityData.name}
        </Typography>
        <Typography variant="body1" className={classes.root}>
          {Math.round(cityData.main.temp)}
        </Typography>
        <Typography variant="body1" className={classes.root}>
          Feels Like:{Math.round(cityData.main.feels_like)}
        </Typography>
      </CardContent>
    </Card>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    // background: theme.palette.primary.main,
  },
}));
