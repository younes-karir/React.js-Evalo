import {
  PRIMARY_CHANGE,
  PRIMARY_UPDATE,
  SWITCH_DARK,
  SWITCH_LIGHT,
} from "../actions/types";

import { light, dark } from "../../helpers/Theme/index";

const initialState = {
  lightTheme: light,
  primary: "#0080ff",
};

const Theme = function (state = initialState, action) {
  switch (action.type) {
    case SWITCH_LIGHT:
      return {
        ...state,
        lightTheme: light,
      };
    case SWITCH_DARK:
      return {
        ...state,
        lightTheme: dark,
      };

    case PRIMARY_CHANGE:
      const newobj1 = {
        ...state.lightTheme.colors,
        primary: action.payload.data,
      };
      return {
        lightTheme: {
          ...state.lightTheme,
          colors: newobj1,
        },
        primary: action.payload.data,
      };

    case PRIMARY_UPDATE:
      const newobj2 = {
        ...state.lightTheme.colors,
        primary: state.primary,
      };
      return {
        primary: state.primary,
        lightTheme: {
          ...state.lightTheme,
          colors: newobj2,
        },
      };
    default:
      return state;
  }
};

export default Theme;
