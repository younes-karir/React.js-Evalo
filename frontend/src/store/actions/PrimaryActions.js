import { PRIMARY_CHANGE} from "./types";

export const OnColorChange = (data, light) => (dispatch) => {
  dispatch({
    type: PRIMARY_CHANGE,
    payload: {
      data: data,
    },
  });
};
