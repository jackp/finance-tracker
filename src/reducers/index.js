/**
 * Combine all application reducers
 */

import { combineReducers } from 'redux';
import { handleActions as actionReducers } from 'redux-actions';
import { reducer as formReducer } from 'redux-form';

import {
  ADD_ENTRY,
} from '../constants/actionTypes';


const initialState = {
  entries: [],
  total: 0,
};

const appReducers = actionReducers({
  [ADD_ENTRY]: (state, action) => ({
    entries: state.entries.concat(action.payload),
    total: state.total + parseInt(action.payload.amount, 10),
  }),
}, initialState);

export default combineReducers({
  form: formReducer,
  app: appReducers,
});
