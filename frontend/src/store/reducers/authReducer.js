import { SET_CURRENT_USER, START_LOADING_USER, STOP_LOADING_USER, UNSET_CURRENT_USER } from "../actions/types";

const initialState = {
  isAuthenticated: false,
  isLoading : false,
  user: {},
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case UNSET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: false,
        user: {},
      };

    case START_LOADING_USER : 
    return {
      ...state,
      isLoading : true
    }
    case STOP_LOADING_USER : 
    return {
      ...state,
      isLoading : false,
    }
    default:
      return state;
  }
};

export default AuthReducer;
