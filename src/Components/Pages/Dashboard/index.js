import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import { Grid, makeStyles, Paper, TextField } from "@material-ui/core";
import { connect } from "react-redux";
import Options from "./Options";
import Chart from "./Chart";
import Maps from "./Map";
import { getDashBoard } from "../../../store/action";

const useStyles = makeStyles((theme) => ({
  leafletContainer: {
    height: "180px",
    width: "100%",
    margin: 50,
  },
}));

const Dashboard = ({ dataList, isLoading, ...props }) => {
  const classes = useStyles();

  const [dropdownValue, setDropdownValue] = useState({});
  const [selectedFilterOption, setSelectedFilterOption] = useState(dataList[0]);
  const getAnalytics = () => props.getDashBoardData();

  useEffect(() => {
    getAnalytics();
  }, []);

  const handleDropdownChange = (value) => {
    setDropdownValue(value);
    const filterdData = dataList && dataList.find((data) => data._id === value);
    setSelectedFilterOption(filterdData);
  };

  const result = () => {
    const mappedData = selectedFilterOption && selectedFilterOption.result.map((filter) => filter[Object.keys(filter)]);
    if (mappedData) return mappedData[mappedData.length - 1];
    return {};
  };
  useEffect(() => {
    setSelectedFilterOption(dataList[0]);
  }, [dataList]);

  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid container justify="space-between" direction="row" style={{ width: "100%", alignItems: "center" }}>
          <Typography variant="h5" style={{ minWidth: "238px" }}>
            OVERVIEW
          </Typography>
          <Grid item>
            <Grid container direction="row" justify="space-between" alignItems="center">
              <Grid style={{ width: 200 }}>
                <TextField
                  select
                  SelectProps={{
                    native: true,
                  }}
                  size="medium"
                  fullWidth
                  variant="outlined"
                  onChange={(e) => handleDropdownChange(e.target.value)}
                  label={"State-wise Filter"}
                  InputLabelProps={{ shrink: true }}
                  value={dropdownValue}
                  id="state_dropdown"
                  required={true}
                >
                  {dataList && dataList.length
                    ? dataList.map((item) => {
                        return (
                          <option key={item && item["_id"]} name={item["location"]} style={{ color: "black" }} value={item && item["_id"]}>
                            {(item && item["location"]) || ""}
                          </option>
                        );
                      })
                    : null}
                </TextField>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} style={{ paddingTop: 10 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} lg={3}>
                <Options {...{ isLoading }} primaryText={result().total} primaryValue={5} secondaryText="Total Cases" />
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <Options {...{ isLoading }} primaryText={result().confirmed} primaryValue={4} secondaryText="Active Cases" />
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <Options {...{ isLoading }} primaryText={result().recovered} primaryValue={3} secondaryText="Recovered" />
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <Options {...{ isLoading }} primaryText={result().dead} primaryValue={3} secondaryText={"Death"} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Chart piechart title="Pie Chart" data={result()} />
              </Grid>
              <Grid item xs={12} md={6}>
                <Chart lineChart title="Line Graph" data={selectedFilterOption && selectedFilterOption.result} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Paper style={{ height: "65vh", width: "100%" }}>
              <Grid container spacing={3}>
                <Grid className={classes.leafletContainer}>
                  <Maps data={dataList} />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    dataList: state.Analytics.dataList || [],
    isLoading: state.Analytics.isLoading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getDashBoardData: () => dispatch(getDashBoard()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
