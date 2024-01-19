import axios from "axios";
import {
  ELEVES_ALL_SUCCESS,
  ELEVES_CLEAR,
  NOTIFY_SUCCESS,
  START_LOADING,
  STOP_LOADING,
} from "./types";

export const getAll = (classe) => (dispatch) => {
  dispatch({
    type: START_LOADING,
  });
  axios
    .post("http://localhost:2000/eleves/all", { id: classe })
    .then((res) => {
      setTimeout(() => {
        dispatch({
          type: ELEVES_ALL_SUCCESS,
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

export const Remove = (eleve, classe) => (dispatch) => {
  dispatch({
    type: START_LOADING,
  });
  axios.delete("http://localhost:2000/eleves/" + eleve).then((res) => {
    dispatch({
      type: NOTIFY_SUCCESS,
      payload: {
        message: "l'eleve a été supprimé !",
      },
    });
    dispatch(getAll(classe));
  });
};

export const Add = (eleve) => (dispatch) => {
  dispatch({
    type: START_LOADING,
  });

  axios.post("http://localhost:2000/eleves", eleve).then((res) => {
    setTimeout(() => {
      dispatch({
        type: STOP_LOADING,
      });
      dispatch(getAll(eleve.class));
      dispatch({
        type: NOTIFY_SUCCESS,
        payload: {
          message: "l'eleve a été ajouté avec succès",
        },
      });
    }, 1000);
  });
};

export const ClearDataE = () => (dispatch) => {
  dispatch({
    type: ELEVES_CLEAR,
  });
};
