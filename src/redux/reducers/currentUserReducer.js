import { LOG_IN, LOG_OUT, TOKEN } from "../types/currentUserTypes";
const initialState = {
  currentUser: null,
};

// Los reducers tienen que ser funciones __puras__!!
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOG_IN:
      return { ...action, currentUser: action.payload };
    case TOKEN:
      return { ...action, currentUser: action.payload };
    case LOG_OUT:
      return initialState;
    default:
      return state;
  }
}
