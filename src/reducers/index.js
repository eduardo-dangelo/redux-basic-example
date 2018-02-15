import { combineReducers } from 'redux';
import { reducer as dbz } from '../app/reducer'

const rootReducer = combineReducers({
  dbz: dbz
});

export default rootReducer;