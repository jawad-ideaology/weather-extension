import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { AppContainer, WeatherCard } from "../components";
import { Grid, ThemeProvider } from "@material-ui/core";
import { theme } from "../theme/theme";
import { WeatherPage } from "../pages/WeatherPage";

// const App = <img src="ext.png" />;

const root = document.createElement("div");
document.body.appendChild(root);

const People: React.FC<{}> = () => {
  return <div>PopUp</div>;
};

const App: React.FC<{}> = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <BrowserRouter>
          {/* <Link to="/">Home</Link>
          <Link to="/people">People</Link> */}
          {/* <WeatherPage /> */}
          <Routes>
            <Route path="/popup.html" element={<WeatherPage />} />
            <Route path="/people" element={<People />} />
          </Routes>
        </BrowserRouter>
      </AppContainer>
    </ThemeProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
);
