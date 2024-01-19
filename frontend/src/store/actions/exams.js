import axios from "axios";
import {
  EXAM_ALL_SUCCESS,
  GET_LAST_EXAM,
  GET_SELECTED_EXAM,
  NOTIFY_SUCCESS,
  SELECTED_EXAM_CLEAR,
  START_LOADING,
  STOP_LOADING,
} from "./types";

export const getAll = (isLoading) => (dispatch) => {
  if (isLoading) {
    dispatch({
      type: START_LOADING,
    });
  }
  axios
    .get("http://localhost:2000/exams")
    .then((res) => {
      dispatch({
        type: EXAM_ALL_SUCCESS,
        payload: {
          data: res.data,
        },
      });
      if (isLoading) {
        dispatch({
          type: STOP_LOADING,
        });
      }
    })
    .catch((err) => {
      if (isLoading) {
        dispatch({
          type: STOP_LOADING,
        });
      }
    });
};

export const Add = (exam) => (dispatch) => {
  dispatch({
    type: START_LOADING,
  });

  axios.post("http://localhost:2000/exams", exam).then((res) => {
    setTimeout(() => {
      dispatch({
        type: STOP_LOADING,
      });
    }, 1000);
    dispatch(getAll(false));
    dispatch({
      type: NOTIFY_SUCCESS,
      payload: {
        message: "l'examen a été ajouté avec succès",
      },
    });
  });
};

export const Remove = (exam) => (dispatch) => {
  dispatch({
    type: START_LOADING,
  });
  axios.delete("http://localhost:2000/exams/" + exam).then((res) => {
    dispatch(getAll(false));
    dispatch({
      type: NOTIFY_SUCCESS,
      payload: {
        message: "l'examen a été supprimé !",
      },
    });
    setTimeout(() => {
      dispatch({
        type: STOP_LOADING,
      });
    }, 1000);
  });
};

export const select = (id) => (dispatch) => {
  dispatch({
    type: GET_SELECTED_EXAM,
    payload: {
      id: id,
    },
  });
};

export const GetLatestExam = () => (dispatch) => {
  dispatch({
    type: START_LOADING,
  });

  axios
    .get("http://localhost:2000/exams/last")
    .then((res) => {
      setTimeout(() => {
        dispatch({
          type: GET_LAST_EXAM,
          payload: {
            data: res.data,
          },
        });
        console.log("getting last exam");

        dispatch({
          type: STOP_LOADING,
        });
      }, 1);
    })
    .catch((err) => {
      dispatch({
        type: STOP_LOADING,
      });
    });
};

export const ClearDataE = () => (dispatch) => {
  dispatch({
    type: SELECTED_EXAM_CLEAR,
  });
};
