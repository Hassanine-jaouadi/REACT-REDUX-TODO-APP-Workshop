import {
  ADD_TASK,
  DELETE_TASK,
  CHECK_TASK,
  EDIT_TASK
} from "../constants/action-types.js";

const intialState = [];

// Reducers (it is a fnction that take ation and state as parameter )
// then it changes the state and stores it in store
const reducerTask = (state = intialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload]; // We return here the last updated state using "action.payload"

    case DELETE_TASK:
      return state.filter(el => el.id !== action.payload);
    case CHECK_TASK:
      return state.map(el =>
        el.id === action.payload ? { ...el, isComplete: !el.isComplete } : el
      );
    case EDIT_TASK:
      return state.map(el =>
        el.id === action.payload.id ? { ...el, text: action.payload.text } : el
      );

    default:
      return state;
  }
};

export default reducerTask;
