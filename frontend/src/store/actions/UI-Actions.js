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
  PRIMARY_CHANGE,
  PRIMARY_UPDATE,
  SHOW_SETTINGS,
  SWITCH_DARK,
  SWITCH_LIGHT,
  UI_ADDEXAM_CLOSE,
  UI_ADDEXAM_OPEN,
  UI_CONFIRM_CLOSE,
  UI_CONFIRM_CLOSE_YES,
  UI_CONFIRM_OPEN,
  UI_LaptopSideBarMenu_TOGGLE,
  UI_SETTINGS_TOGGLE,
} from "./types";

export const LaptopSideBarMenuToggle = () => (dispatch) => {
  dispatch({
    type: UI_LaptopSideBarMenu_TOGGLE,
  });
};

export const SettingsToggle = () => (dispatch) => {
  dispatch({
    type: UI_SETTINGS_TOGGLE,
  });
};

export const AddExamOpen = () => (dispatch) => {
  dispatch({
    type: UI_ADDEXAM_OPEN,
  });
};

export const AddExamClose = () => (dispatch) => {
  dispatch({
    type: UI_ADDEXAM_CLOSE,
  });
};

// confirm actions

export const OpenConfirm = (data) => (dispatch) => {
  dispatch({
    type: UI_CONFIRM_OPEN,
    payload: {
      data: data,
    },
  });
};

export const CloseConfirm = () => (dispatch) => {
  dispatch({
    type: UI_CONFIRM_CLOSE,
  });
};

export const CloseConfirmYes = () => (dispatch) => {
  dispatch({
    type: UI_CONFIRM_CLOSE_YES,
  });
};

// edit exam methodes

export const OpenEditExam = () => (dispatch) => {
  dispatch({
    type: EDIT_EXAM_OPEN,
  });
};

export const CloseEditExam = () => (dispatch) => {
  dispatch({
    type: EDIT_EXAM_CLOSE,
  });
};

export const OpenAddQACM = () => (dispatch) => {
  dispatch({
    type: ADD_QUESTION_OPEN,
  });
};

export const CloseAddQACM = () => (dispatch) => {
  dispatch({
    type: ADD_QUESTION_CLOSE,
  });
};

export const OpenAddClass = () => (dispatch) => {
  dispatch({
    type: ADD_CLASS_OPEN,
  });
};

export const CloseAddClass = () => (dispatch) => {
  dispatch({
    type: ADD_CLASS_CLOSE,
  });
};

export const OpenAddEleve = () => (dispatch) => {
  dispatch({
    type: ADD_ELEVE_OPEN,
  });
};

export const CloseAddEleve = () => (dispatch) => {
  dispatch({
    type: ADD_ELEVE_CLOSE,
  });
};

export const OpenAddQst = () => (dispatch) => {
  dispatch({
    type: ADD_QST_OPEN,
  });
};

export const CloseAddQst = () => (dispatch) => {
  dispatch({
    type: ADD_QST_CLOSE,
  });
};

export const ThemeToggleLight = () => (dispatch) => {
  dispatch({
    type: SWITCH_LIGHT,
  });
  dispatch({
    type: PRIMARY_UPDATE,
  });
};

export const ThemeToggleDark = () => (dispatch) => {
  dispatch({
    type: SWITCH_DARK,
  });
  dispatch({
    type: PRIMARY_UPDATE,
  });
};

export const SettingsToggleShow = () => (dispatch) => {
  dispatch({
    type: SHOW_SETTINGS,
  });
};

export const SettingsToggleHide = () => (dispatch) => {
  dispatch({
    type: HIDE_SETTINGS,
  });
};
