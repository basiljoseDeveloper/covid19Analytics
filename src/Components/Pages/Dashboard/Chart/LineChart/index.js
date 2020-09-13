import React from "react";
import Plot from "react-plotly.js";

const LineChart = ({ data, title }) => {
  let xAxis = [];
  let confirmed = [];
  let recovered = [];
  let dead = [];
  let total = [];
  data &&
    data.forEach((i) => {
      const keys = Object.keys(i);
      xAxis.push(...keys);
      confirmed.push(i[keys].confirmed);
      recovered.push(i[keys].recovered);
      dead.push(i[keys].dead);
      total.push(i[keys].total);
    });

  const graphData = [
    { x: xAxis, y: confirmed, type: "scatter", mode: "lines", name: "Confirmed" },
    { x: xAxis, y: recovered, type: "scatter", mode: "lines", name: "Recovered" },
    { x: xAxis, y: dead, type: "scatter", mode: "lines", name: "Dead" },
    { x: xAxis, y: total, type: "scatter", mode: "lines", name: "Total Cases" },
  ];
  return <Plot data={graphData} useResizeHandler style={{ width: "100%", height: "100%" }} layout={{ autosize: true, title: title }} />;
};

export default LineChart;
