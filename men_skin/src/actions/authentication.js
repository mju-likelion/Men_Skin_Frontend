import axios from "axios";
import {
  AUTH_REGISTER,
  AUTH_REGISTER_SUCCESS,
  AUTH_REGISTER_FAILURE,
  AUTH_LOGIN,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILURE,

} from "./ActionsTypes";


const serverURL = process.env.REACT_APP_API_URL;

export function registerRequest(id, password, birth, email, zip, address) {
  return (dispatch) => {
    // Inform Register API is starting
    dispatch(register());
    return axios
      .post(serverURL + "api/users/register", {
        id: id,
        password: password,
        dateOfBirth: birth,
        email: email,
        // zip,
        address: address,
      })
      .then((response) => {
        if (response.status === 200) {
          // SUCCEEDc
          // console.log(response.data);
          dispatch(registerSuccess(id));
        } else {
          // FAILED
          dispatch(registerFailure());
        }
      })
      .catch((err) => {
        // console.log(err);
      });
  };
}
export function loginRequest(id, password) {
  return (dispatch) => {
    // Inform Login API is starting
    dispatch(login());

    // API REQUEST

    return (
      axios
        // .post("http://localhost:5000/api/users/login", { id, password })
        .post(serverURL + "api/users/login", { id, password })
        .then((response) => {
          if (response.status === 200) {
            // SUCCEED
            localStorage.setItem("token", response.data.token);
            dispatch(loginSuccess(id));
          } else {
            // FAILED
            // console.log("fail");
            dispatch(loginFailure());
          }
        })
        .catch((err) => {
          // console.log(err);
        })
    );
  };
}

export function register() {
  return {
    type: AUTH_REGISTER,
  };
}

export function registerSuccess() {
  return {
    type: AUTH_REGISTER_SUCCESS,
  };
}

export function registerFailure(error) {
  return {
    type: AUTH_REGISTER_FAILURE,
    error,
  };
}



export function login() {
  return {
    type: AUTH_LOGIN,
  };
}

export function loginSuccess() {
  return {
    type: AUTH_LOGIN_SUCCESS,
  };
}

export function loginFailure() {
  return {
    type: AUTH_LOGIN_FAILURE,
  };
}


