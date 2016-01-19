/**
 * Actions
 */

import { createAction as actionCreator } from 'redux-actions';
import {
  ADD_ENTRY,
} from '../constants/actionTypes';

export const addEntry = actionCreator(ADD_ENTRY);
