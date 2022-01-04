import React, { useEffect, useState } from "react";
import {
  Divider,
  Grid,
  IconButton,
  InputBase,
  makeStyles,
  Paper,
  Theme,
} from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

//icons
import AddIcon from "@material-ui/icons/Add";

// components
import { ExtensionModal, MODALP, WeatherCard } from "../components";
import { fetchOpenWeatherData, OpenWeatherType } from "../utils/api";

// Error Interface

interface ErrorI {
  code: number;
  message: string;
}

export const WeatherPage = () => {
  const [cityName, setCityName] = useState<string>("");
  const [weatherData, setWeatherData] = useState<OpenWeatherType[] | null>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [modalData, setModalData] = useState<MODALP | null>(null);
  const [errorMessage, setErrorMessage] = useState<boolean>(false);

  const classes = useStyles();

  // useEffect(() => {
  //   fetchOpenWeatherData("Karachi")
  //     .then((data) => {
  //       console.log("Data", data);
  //       setWeatherData((oldData) => [...oldData, data]);
  //       console.log("weatherData", weatherData);
  //     })
  //     .catch((err) => console.log("Error", err));
  // }, []);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (cityName.length <= 2) {
      console.log("Gello");
      setErrorMessage(true);
      return false;
    }
    // alert("Hello");
    setLoading(true);
    fetchOpenWeatherData(cityName)
      .then((data) => {
        setWeatherData((oldData) => [...oldData, data]);
        setLoading(false);
        setCityName("");
      })
      .catch((err: ErrorI) => {
        const errorMessage = err.message;
        setLoading(false);
        setCityName("");
        setModalData({
          title: "Error",
          para: errorMessage,
          modalOpen: true,
        });
      });
    // setCities((oldCities) => [...oldCities, cityName]);
  };

  // if (!weatherData) {
  //   return <div>Loading</div>;
  // }

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item xs={12}>
        <Paper className={classes.root}>
          <InputBase
            className={classes.input}
            placeholder="City Name"
            inputProps={{ "aria-label": "city name" }}
            value={cityName}
            onChange={(e) => {
              setCityName(e.target.value);
              setErrorMessage(false);
            }}
            required
          />
          <IconButton
            className={classes.iconButton}
            aria-label="search"
            onClick={handleSubmit}
          >
            <AddIcon />
          </IconButton>
        </Paper>
        {errorMessage && (
          <p className={classes.errorMessage}>Must be 3 alphabets</p>
        )}
      </Grid>
      {isLoading && <Skeleton variant="rect" height={118} />}
      {weatherData.length >= 1 &&
        weatherData.map((city, key) => {
          return (
            <Grid item key={key}>
              <WeatherCard cityData={city} />
            </Grid>
          );
        })}
      {weatherData.length < 1 && <h3 className={classes.center}>No Data</h3>}
      {/* For Error popup */}
      <ExtensionModal modalData={modalData} />
    </Grid>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "80%",
    margin: "auto",
  },
  errorMessage: {
    padding: "2px 32px",
    display: "flex",
    alignItems: "center",
    width: "80%",
    color: "red",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  center: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
  },
}));
