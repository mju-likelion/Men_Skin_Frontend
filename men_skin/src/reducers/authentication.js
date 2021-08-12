import * as types from "../actions/ActionsTypes";

const initialState = {
  login: {
    status: "INIT",
  },
  register: {
    status: "INIT",
    error: -1,
  },
  image: {
    status: "INIT",
    payload: [],
    condition: "",
  },
  upload: {
    status: "INIT",
  },
  status: {
    valid: false,
    isLoggedIn: false,
  },
};

export default function authentication(state = initialState, action) {
  switch (action.type) {

    case types.AUTH_LOGIN:
      return {
        ...state,
        login: {
          status: "WAITING",
          //추가??
        },
      };
    case types.AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        login: {
          status: "SUCCESS",
        },
        status: {
          ...state.status,
          isLoggedIn: true,
        },
      };
    case types.AUTH_LOGIN_FAILURE:
      return {
        ...state,
        login: {
          status: "FAILURE",
        },
      };
    
    default:
      return state;
  }
}
