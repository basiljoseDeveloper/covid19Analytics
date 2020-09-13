import { Dashboard } from "../actionTypes";
const initialState = {
  dataList: [],
  isLoading: false,
};
const Analytics = (state = initialState, action) => {
  switch (action.type) {
    case Dashboard.SET_DATA:
      return {
        ...state,
        dataList: action.data,
      };
    case Dashboard.LOADER:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    default:
      return state;
  }
};

export default Analytics;
