import {
  INCREMENT,
  DECREMENT,
  FETCH_USERS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "./actionTypes";
import axios from "axios";
export const increment = (number) => {
  return {
    type: INCREMENT,
    payload: number,
  };
};

export const decrement = (number) => {
  return {
    type: DECREMENT,
    payload: number,
  };
};

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS,
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

export const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    axios
      .get("https://api.sampleapis.com/futurama/info")
      .then((response) => {
        console.log(response);
        dispatch(fetchUsersSuccess(response.data));
      })
      .catch((error) => dispatch(fetchUsersFailure(error.message)));
  };
};
