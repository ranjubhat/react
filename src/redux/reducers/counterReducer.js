import { INCREMENT, DECREMENT } from "../actionsContainer/actionTypes";
const initialState = {
  count: 0,
};

export const countReducer = (state=initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + action.payload };
    case DECREMENT:
      if (state.count - action.payload < 0) {
        return { ...state, count: state.count };
      } else {
        return { ...state, count: state.count - action.payload };
      }
    // case "reset":
    //   return { ...state, count: initialState.count };

    default:
      return state;
  }
};
