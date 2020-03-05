import { createStore } from "redux";
import rootReducer from "../../js/reducers/reducerTask.js";

//This is the store we create with redux's createStore method
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
