import { createStore } from 'redux';
import MainReducer from './reducers/MainReducer';
let initialState = {
  school: {}
};
export default createStore(MainReducer);
