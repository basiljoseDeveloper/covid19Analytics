import { Dashboard } from "../actionTypes";
import Data from "../../Components/Pages/Dashboard/Data";

export const getDashBoard = () => async (dispatch) => {
  try {
    dispatch({ type: Dashboard.LOADER, isLoading: true });
    let response = await dispatch({ type: Dashboard.SET_DATA, data: Data });
    if (response.data.length) dispatch({ type: Dashboard.LOADER, isLoading: false });
  } catch (err) {
    console.log("err: ", err);
  }
};
