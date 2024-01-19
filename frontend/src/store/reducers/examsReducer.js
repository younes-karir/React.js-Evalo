const {
  EXAM_ALL_SUCCESS,
  GET_SELECTED_EXAM,
  SELECTED_EXAM_CLEAR,
  GET_LAST_EXAM,
} = require("../actions/types");

const initialState = {
  list: [],
  selected: "empty",
  last: "empty",
};

const examReducer = function (state = initialState, action) {
  switch (action.type) {
    case EXAM_ALL_SUCCESS:
      return {
        ...state,
        list: action.payload.data,
      };

    case GET_SELECTED_EXAM:
      // console.log(state.list)
      const item = state.list.find((item) => item._id === action.payload.id);
      return {
        ...state,
        selected: item,
      };
    case GET_LAST_EXAM:
      return {
        ...state,
        last: action.payload.data,
      };
    case SELECTED_EXAM_CLEAR:
      return initialState;
    default:
      return state;
  }
};

export default examReducer;
