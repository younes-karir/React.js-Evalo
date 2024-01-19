import {
  ADD_CLASS_CLOSE,
  ADD_CLASS_OPEN,
  ADD_ELEVE_CLOSE,
  ADD_ELEVE_OPEN,
  ADD_QST_CLOSE,
  ADD_QST_OPEN,
  ADD_QUESTION_CLOSE,
  ADD_QUESTION_OPEN,
  EDIT_EXAM_CLOSE,
  EDIT_EXAM_OPEN,
  HIDE_SETTINGS,
  SHOW_SETTINGS,
  UI_ADDEXAM_CLOSE,
  UI_ADDEXAM_OPEN,
  UI_LaptopSideBarMenu_TOGGLE,
  UI_SETTINGS_TOGGLE,
} from "../actions/types";

const initialState = {
  LaptopSideBarMenu: false,
  MobileSideBarContainer: false,
  showSettings: false,
  showAddExam: false,
  showEditExam: false,
  addQACM:false,
  addClass:false,
  addEleve:false,
  addQst:false,
  showSetting : false,
};

const UIReducer = function (state, action) {
  switch (action.type) {
    case UI_LaptopSideBarMenu_TOGGLE:
      return {
        ...initialState,
        LaptopSideBarMenu: !state.LaptopSideBarMenu,
      };
    case UI_SETTINGS_TOGGLE:
      return {
        ...initialState,
        showSettings: !state.showSettings,
      };
    case UI_ADDEXAM_OPEN:
      return {
        ...initialState,
        showAddExam: true,
      };
    case UI_ADDEXAM_CLOSE:
      return {
        ...initialState,
        showAddExam: false,
      };

    case EDIT_EXAM_OPEN:
      return {
        ...initialState,
        showEditExam: true,
      };
    case EDIT_EXAM_CLOSE:
      return {
        ...initialState,
        showEditExam: false,
      };

    case ADD_QUESTION_OPEN : 
    return {
      ...initialState,
      addQACM:true
    }
    case ADD_QUESTION_CLOSE : 
    return {
      ...initialState,
      addQACM:false
    }
    case ADD_CLASS_OPEN : 
    return {
      ...initialState,
      addClass:true
    }
    case ADD_CLASS_CLOSE : 
    return {
      ...initialState,
      addClass:false
    }
    case ADD_ELEVE_OPEN : 
    return {
      ...initialState,
      addEleve:true
    }
    case ADD_ELEVE_CLOSE : 
    return {
      ...initialState,
      addEleve:false
    }
    case ADD_QST_OPEN : 
    return {
      ...initialState,
      addQst:true
    }
    case ADD_QST_CLOSE : 
    return {
      ...initialState,
      addQst:false
    }
    case SHOW_SETTINGS : 
    return {
      ...initialState,
      showSetting:true
    }
    case HIDE_SETTINGS : 
    return {
      ...initialState,
      showSetting:false
    }
    default:
      return initialState;
  }
};

export default UIReducer;
