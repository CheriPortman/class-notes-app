import { combineReducers } from 'redux';

import notes from './notesReducer';
import session from './sessionReducer';

export default combineReducers({ 
  notes,
  session
});
