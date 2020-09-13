import { makeStyles } from "@material-ui/core";
import React from "react";
import "./App.css";
import Dashboard from "./Components/Pages/Dashboard";
import Header from "./Components/Pages/Dashboard/AppBar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "100vh",
    width: "100%",
    overflow: "hidden",
  },
  toolbar: theme.mixins.toolbar,
  content: {
    height: "calc( 100vh - 64px)",
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    marginTop: 64,
    overflow: "auto",
    width: "100%",
  },
}));
function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Header />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
