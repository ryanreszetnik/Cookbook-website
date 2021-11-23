import { UsbOutlined } from "@material-ui/icons";
import {v4} from "uuid";
import {
  SET_ALL_RECIPES,
  DELETE_RECIPE,
  ADD_RECIPE,
  UPDATE_RECIPE,
} from "../Constants/actions";
const INITIAL_STATE = [];
export default function allRecipeReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_ALL_RECIPES:
      return action.payload;
    case DELETE_RECIPE:
      return state.filter((re) => re.id !== action.payload.id);
    case ADD_RECIPE:
      return [...state, action.payload];
    case UPDATE_RECIPE:
      return state.map((rec) => {
        if (rec.id === action.payload.id) {
          return action.payload;
        }
        return rec;
      });
    default:
      return state;
  }
}
