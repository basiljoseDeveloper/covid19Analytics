import React from "react";
import { Card, Typography, Grid, CardContent, CircularProgress } from "@material-ui/core";

const Options = ({ primaryText, secondaryText, children, isLoading }) => {
  const checkIsNaN = (value) => Number.isNaN(value);

  const returnTextValue = () => {
    if (checkIsNaN(primaryText) || !primaryText) return 0;
    return primaryText;
  };
  return (
    <Card>
      <Grid container alignItems="center" justify="space-between" style={{ textAlign: "center", justifyContent: "center", minHeight: 200 }}>
        <Grid item>
          <Typography variant="h4" style={{ padding: 20 }}>
            {isLoading ? <CircularProgress /> : returnTextValue()}
          </Typography>
          <Typography variant="body1">{secondaryText}</Typography>
        </Grid>
      </Grid>

      {children ? <CardContent>{children}</CardContent> : null}
    </Card>
  );
};

export default Options;
