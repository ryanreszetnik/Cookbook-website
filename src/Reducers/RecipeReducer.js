import {v4} from "uuid";
import {
  ADD_RECIPE,
  UPDATE_RECIPE,
  SET_RECIPES,
  DELETE_RECIPE,
} from "../Constants/actions";
const INITIAL_STATE = [];
export default function recipeReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
      case DELETE_RECIPE:
        return state.filter(re=>re.id!==action.payload.id)
      case SET_RECIPES:
          return action.payload;
    case ADD_RECIPE:
      return [...state, action.payload];
    case UPDATE_RECIPE:
        return state.map(rec=>{
            if(rec.id===action.payload.id){
                return action.payload;
            }
            return rec;
        })
    default:
      return state;
  }
}
