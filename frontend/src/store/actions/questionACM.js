import axios from "axios";
import {
  NOTIFY_SUCCESS,
  QUESTIONS_ALL_SUCCESS,
  QUESTIONS_CLEAR,
  START_LOADING,
  STOP_LOADING,
} from "./types";

export const getAll = (exam) => (dispatch) => {
  dispatch({
    type: START_LOADING,
  });
  axios
    .post("http://localhost:2000/questions/all", { id: exam })
    .then((res) => {
        setTimeout(() => {
          dispatch({
            type: QUESTIONS_ALL_SUCCESS,
            payload: {
              data: res.data,
            },
          });
    
          dispatch({
            type: STOP_LOADING,
          });
        }, 1000);
    })
    .catch((err) => {
      dispatch({
        type: STOP_LOADING,
      });
    });
};

export const Add = (question) => (dispatch) => {
  dispatch({
    type: START_LOADING,
  });

  axios.post("http://localhost:2000/questions", question).then((res) => {
    dispatch(getAll(question.exam));
    dispatch({
      type: NOTIFY_SUCCESS,
      payload: {
        message: "Ajouté avec succès",
      },
    });
  });
};

export const Remove = (question,exam) => (dispatch) => {
  dispatch({
    type: START_LOADING,
  });
  axios.delete("http://localhost:2000/questions/" + question._id).then((res) => {
    dispatch({
      type: NOTIFY_SUCCESS,
      payload: {
        message: "la question a été supprimé !",
      },
    });
    dispatch(getAll(exam));

  });
};




export const ClearDataQ = () => (dispatch) => {
  dispatch({
    type: QUESTIONS_CLEAR,
  });

};
