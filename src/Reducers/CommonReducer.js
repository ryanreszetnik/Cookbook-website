import { SET_AUTH_STATUS,SET_USER } from "../Constants/actions";
import { LOGGEDOUT } from "../Constants/states";


const INITIAL_STATE = { user: null, auth: LOGGEDOUT};
export default function commonReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_AUTH_STATUS:
        return {...state,auth:action.payload}
    case SET_USER:
        return{...state,user:action.payload}
    default:
      return state;
  }
}
