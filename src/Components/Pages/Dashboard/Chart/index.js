import React from "react";
import { Paper } from "@material-ui/core";
import PieChart from "./PieChart";
import LineChart from "./LineChart";

const Chart = ({ data, title, ...props }) => {
  return (
    <Paper>
      {props.piechart && <PieChart {...{ data, title }} />}
      {props.lineChart && <LineChart {...{ data, title }} />}
    </Paper>
  );
};
export default Chart;
