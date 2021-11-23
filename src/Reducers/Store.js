import { createStore } from "redux";
import rootReducer from "./AppReducer";

const store = createStore(rootReducer);
export default store;
