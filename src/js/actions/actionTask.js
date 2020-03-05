import {
  ADD_TASK,
  DELETE_TASK,
  CHECK_TASK,
  EDIT_TASK
} from "../constants/action-types";

//Actions are objects that tell reducer how to change data
//Actions are payloads of information that send data from your application to your store.
// They are the only source of information for the store.
//  Each action creator contains an action and payload which contains the data we need to pass to the reducers.
export const addItem = payload => {
  return {
    type: ADD_TASK,
    payload
  };
};
export const deleteItem = payload => {
  return {
    type: DELETE_TASK,
    payload
  };
};
export const completeItem = payload => {
  return {
    type: CHECK_TASK,
    payload
  };
};
export const editItem = payload => {
  return {
    type: EDIT_TASK,
    payload
  };
};
