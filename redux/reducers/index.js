import { combineReducers } from 'redux';
import auth from './authReducer';
import alert from './alertReducer';
import homeStudents from './studentReducer';

export default combineReducers({
  auth,
  alert,
  homeStudents,
});
