import { LOG_IN, LOG_OUT, TOKEN } from "../types/currentUserTypes";
import { authenticationService } from "../../utils/authentication";

// Action creators
export function logIn(email, password) {
  return async (dispatch) => {
    return await authenticationService.login(email, password).then((user) => {
      dispatch({
        type: LOG_IN,
        payload: user,
      });
    });
  };
}

export function logOut() {
  return async (dispatch) => {
    return await authenticationService.logout().then(() => {
      dispatch({
        type: LOG_OUT,
      });
    });
  };
}

export function token() {
  return async (dispatch) => {
    return await authenticationService.userData().then((user) => {
      dispatch({
        type: TOKEN,
        payload: user,
      });
    });
  };
}
