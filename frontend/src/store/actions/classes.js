import axios from "axios";
import {
    CLASS_ALL_SUCCESS,
  GET_LAST_CLASS,
  GET_SELECTED_CLASS,
  NOTIFY_SUCCESS,
  SELECTED_CLASS_CLEAR,
  START_LOADING,
  STOP_LOADING,
} from "./types";

export const getAll = () => (dispatch) => {

    dispatch({
      type: START_LOADING,
    });
  
  axios
    .get("http://localhost:2000/classes")
    .then((res) => {
      dispatch({
        type: CLASS_ALL_SUCCESS,
        payload: {
          data: res.data,
        },
      });
 
      dispatch({
        type: STOP_LOADING,
      });
      
    })
    .catch((err) => {
 
        dispatch({
          type: STOP_LOADING,
        });
      
    });
};

export const Add = (addedClass) => (dispatch) => {
  dispatch({
    type: START_LOADING,
  });

  axios.post("http://localhost:2000/classes", addedClass).then((res) => {
    setTimeout(() => {
      dispatch({
        type: STOP_LOADING,
      });
    }, 1000);
    dispatch(getAll());
    dispatch({
      type: NOTIFY_SUCCESS,
      payload: {
        message: "la classe a été ajouté avec succès",
      },
    });
  });
};


export const Remove = (removedclass) => (dispatch) => {
  dispatch({
    type: START_LOADING,
  });
  axios.delete("http://localhost:2000/classes/" + removedclass).then((res) => {
    dispatch(getAll());
    dispatch({
      type: NOTIFY_SUCCESS,
      payload: {
        message: "la classe a été supprimé !",
      },
    });
    setTimeout(() => {
      dispatch({
        type: STOP_LOADING,
      });
    }, 1000);
  });
};


export const GetLatestClass = () => (dispatch) => {
  dispatch({
    type: START_LOADING,
  });

  axios
    .get("http://localhost:2000/classes/last")
    .then((res) => {
      dispatch({
        type: GET_LAST_CLASS,
        payload: {
          data: res.data,
        },
      });
      dispatch({
        type: STOP_LOADING,
      });
    })
    .catch((err) => {
      dispatch({
        type: STOP_LOADING,
      });
    });
};


export const select = (id) => (dispatch) => {
  dispatch({
    type: GET_SELECTED_CLASS,
    payload: {
      id: id,
    },
  });
};

export const ClearDataC = () => (dispatch) => {
  dispatch({
    type: SELECTED_CLASS_CLEAR,
  });
};

