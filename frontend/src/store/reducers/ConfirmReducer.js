import {
  UI_CONFIRM_CLOSE,
  UI_CONFIRM_CLOSE_YES,
  UI_CONFIRM_OPEN,
} from "../actions/types";
import store from '../../store/Store';
import { Remove } from "../actions/exams";


const initialState = {
  showConfirm: false,
  logic:()=>{},
  title:'',
  text:''
};

const ConfirmReducer = function (state, action) {
  switch (action.type) {
    case UI_CONFIRM_OPEN:
      return {
        logic: action.payload.data.logic,
        showConfirm: true,
        title:action.payload.data.title,
        text:action.payload.data.text
      };
    case UI_CONFIRM_CLOSE:
      return {
        ...initialState,
        showConfirm: false,
      };
    case UI_CONFIRM_CLOSE_YES:  
      return {
        ...initialState,
        showConfirm: false,
      };
    default:
      return initialState;
  }
};

export default ConfirmReducer;
