import {combineReducers} from 'redux';
import Camera from './Cameras/reducer';

const RootReducer = combineReducers({
  Camera,
});
export default RootReducer;
