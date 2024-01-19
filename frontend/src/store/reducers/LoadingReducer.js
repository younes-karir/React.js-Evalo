import { START_LOADING, STOP_LOADING } from "../actions/types";

const initialState = {
  isLoading: false,
  
};

const LoadingReducer = function (state = initialState, action) {
  switch(action.type) {
    case START_LOADING:
      return {
        isLoading:true
      }
    case STOP_LOADING:
      return {
        isLoading:false
      }
    default: 
        return state;
}
};

export default LoadingReducer;
