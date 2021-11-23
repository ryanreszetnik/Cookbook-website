import {
  START_DRAG_RECIPE,
  DROP_RECIPE,
  REMOVE_RECIPE,
} from "../Constants/actions";
const INITIAL_STATE = {
  dragging: null,
  items:[],
};
export default function scheduleReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case START_DRAG_RECIPE://{id:"",recipe:"",day:0,meal:""}
        return {
          dragging:action.payload,
          items:state.items.filter(it=>it.id!==action.payload.id)
        }
    case DROP_RECIPE:
        return{
          dragging:null,
          items:[...state.items,action.payload]
        }
        
    default:
      return state;
  }
}
