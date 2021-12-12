import {
  FETCH_USERS,
  FETCH_USERS_FAILURE,
  FETCH_USERS_SUCCESS,
} from "../actionsContainer/actionTypes";
const initialState = {
  loading: false,
  response: [],
  error: "",
};
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return { ...state, loading: true };
    case FETCH_USERS_SUCCESS:
      return { ...state, response: action.payload, loading: true };
    case FETCH_USERS_FAILURE:
      return { ...state, loading: false, response: [], error: action.payload };

    default:
      return state;
  }
};
