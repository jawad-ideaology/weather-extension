import { Box, makeStyles } from "@material-ui/core";
import React from "react";

export const AppContainer = (props) => {
  const classes = useStyles();
  return <Box className={classes.root}>{props.children}</Box>;
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "320px",
    height: "480px",
    padding: "12px 12px",
  },
}));
