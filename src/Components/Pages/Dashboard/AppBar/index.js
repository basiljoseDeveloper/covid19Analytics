import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  appBar: {
    width: "100vw",
    zIndex: 10,
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar color="inherit" position="fixed" className={classes.appBar}>
        <Toolbar>
          <Grid container justify="space-between" alignItems="center">
            <Typography variant="h4" color="primary">
              Covid 19 Analytics
            </Typography>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}
