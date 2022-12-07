import {combineReducers} from 'redux';
import {registerReducer} from './auth';
import {globalReducer} from './global';
import dataProvinsiReducer from './dataProvinsi';

const reducer = combineReducers({
  registerReducer,
  globalReducer,
  dataProvinsiReducer,
});
export default reducer;
