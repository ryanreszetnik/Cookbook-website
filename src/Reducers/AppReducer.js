import { combineReducers } from "redux";
import commonReducer from './CommonReducer'
import recipeReducer from './RecipeReducer'
import allRecipeReducer from './AllRecipeReducer'
import scheduleReducer from './ScheduleReducer'

const rootReducer = combineReducers({
  common: commonReducer,
  recipes: recipeReducer,
  allRecipes: allRecipeReducer,
  schedule:scheduleReducer
});
export default rootReducer;
