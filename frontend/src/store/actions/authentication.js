import axios from "axios";
import setAuthToken from "./setAuthToken";
import jwt_decode from "jwt-decode";
import {
  CLEAR_ERR,
  GET_ERRORS,
  NOTIFY_ERROR,
  NOTIFY_INFO,
  NOTIFY_SUCCESS,
  SET_CURRENT_USER,
  START_LOADING,
  START_LOADING_USER,
  STOP_LOADING,
  STOP_LOADING_USER,
  UNSET_CURRENT_USER,
} from "./types";

export const registerUser = (user, navigate) => (dispatch) => {
  dispatch({
    type: START_LOADING,
  });
  axios
    .post("http://localhost:2000/users", user)
    .then((res) => {
      dispatch({
        type: NOTIFY_SUCCESS,
        payload: {
          message: "votre compte a été créé avec succès !",
        },
      });
      navigate("/login", { replace: true });
    })
    .catch((err) => {
      dispatch({
        type: STOP_LOADING,
      });
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
      dispatch({
        type: NOTIFY_ERROR,
        payload: {
          message: "verifier les champs",
        },
      });
    })
    .finally(() => {
      dispatch({
        type: STOP_LOADING,
      });
    });
};

export const loginUser = (user) => (dispatch) => {
  dispatch({
    type: START_LOADING,
  });
  axios
    .post("http://localhost:2000/users/login", user)
    .then((res) => {
      dispatch({
        type: NOTIFY_INFO,
        payload: {
          message: "bienvenue !",
        },
      });
      const data = res.data;
      localStorage.setItem("jwtToken", data.token);
      setAuthToken(data.token);
      dispatch({
        type: SET_CURRENT_USER,
        payload: data,
      });
    })
    .catch((err) => {
      // console.log(err)
      dispatch({
        type: STOP_LOADING,
      });
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
      dispatch({
        type: NOTIFY_ERROR,
        payload: {
          message: "verifier les champs",
        },
      });
    })
    .finally(() => {
      dispatch({
        type: STOP_LOADING,
      });
    });
};

export const ClearErr = () => (dispatch) => {
  dispatch({
    type: CLEAR_ERR,
  });
};

export const UserGetting = () => (dispatch) => {
  dispatch({
    type: START_LOADING_USER,
  });
  axios
    .get("http://localhost:2000/users/me")
    .then((res) => {
      dispatch({
        type: SET_CURRENT_USER,
        payload: res.data,
      });
    })
    .catch((err) => {
      logoutUser();
    })
    .finally(() => {
      setTimeout(() => {
        dispatch({
          type: STOP_LOADING_USER,
        });
      }, 2000);
    });
};

export const logoutUser = (dispatch) => {
  localStorage.removeItem("jwtToken");
  setAuthToken(false);
  dispatch({
    type: UNSET_CURRENT_USER,
  });
};
