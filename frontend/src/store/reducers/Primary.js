import { PRIMARY_CHANGE } from "../actions/types";

const initialState = {
  primary: "#0080ff",
};

const Primary = function (state = initialState, action) {
  switch (action.type) {
    case PRIMARY_CHANGE:
      return {
        primary:action.payload.data,
      };
    default:
      return state;
  }
};

export default Primary;
