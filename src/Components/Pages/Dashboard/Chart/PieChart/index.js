import React from "react";
import Plot from "react-plotly.js";

const PieChart = (props) => {
  const data = [props.data.confirmed, props.data.dead, props.data.recovered];
  return (
    <Plot
      data={[
        {
          values: data,
          labels: ["Active Case", "Recovered", "Death"],
          type: "pie",
        },
      ]}
      useResizeHandler
      style={{ width: "100%", height: "100%" }}
      layout={{ autosize: true, title: props.title }}
    />
  );
};

export default PieChart;
