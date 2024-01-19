import axios from "axios";
import {
  CLEAR_QST_QUESTIONS,
  GET_QST_EXAM,
  GET_QST_ID,
  GET_QST_QUESTIONS,
  NOTIFY_ERROR,
  NOTIFY_INFO,
  NOTIFY_SUCCESS,
  NOTIFY_WARNING,
  START_LOADING,
  STOP_LOADING,
} from "./types";

export const Start = (data) => (dispatch) => {
  dispatch({
    type: START_LOADING,
  });

  axios.post("http://localhost:2000/questionnaire", data).then((res) => {
    dispatch({
      type: NOTIFY_SUCCESS,
      payload: {
        message: "Ajouté avec succès",
      },
    });
    dispatch({
      type: STOP_LOADING,
    });
  });
};

export const Assign = (data) => (dispatch) => {
  dispatch({
    type: START_LOADING,
  });

  axios
    .post("http://localhost:2000/questionnaire/assign", data)
    .then((res) => {
      dispatch({
        type: STOP_LOADING,
      });
      dispatch({
        type: NOTIFY_INFO,
        payload: {
          message: "Bonne chance",
        },
      });
      // console.log(res.data)
      dispatch({
        type: GET_QST_ID,
        payload: {
          Qst: res.data.questionnaire,
          eleve : res.data.eleve,
        },
      });
    })
    .catch((err) => {
      dispatch({
        type: STOP_LOADING,
      });
      if (err.response.status === 401) {
        dispatch({
          type: NOTIFY_WARNING,
          payload: {
            message: err.response.data,
          },
        });
      } else {
        dispatch({
          type: NOTIFY_ERROR,
          payload: {
            message: err.response.data,
          },
        });
      }
    });
};

export const GetExam = (exam) => (dispatch) => {
  dispatch({
    type: START_LOADING,
  });

  axios
    .post("http://localhost:2000/exams/get", { id: exam })
    .then((res) => {
      setTimeout(() => {
        dispatch({
          type: GET_QST_EXAM,
          payload: {
            data: res.data,
          },
        });
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

export const getAll = (exam) => (dispatch) => {
  dispatch({
    type: START_LOADING,
  });
  axios
    .post("http://localhost:2000/questions/all", { id: exam })
    .then((res) => {
      setTimeout(() => {
        dispatch({
          type: GET_QST_QUESTIONS,
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

export const ClearFromQST = (exam) => (dispatch) => {
  dispatch({
    type: CLEAR_QST_QUESTIONS,
  });
  // dispatch(getAll(exam));
};

export const SendPaper = (data) => (dispatch) => {
  dispatch({
    type: START_LOADING,
  });

  axios.post("http://localhost:2000/papers", data).then((res) => {
    console.log("send with success");
    dispatch({
      type: STOP_LOADING,
    });
  });
};
