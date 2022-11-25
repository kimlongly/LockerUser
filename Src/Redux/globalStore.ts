import {applyMiddleware, legacy_createStore} from 'redux';
import thunk from 'redux-thunk';
import RootReducer from '.';

const Store = legacy_createStore(RootReducer, applyMiddleware(thunk));
export default Store;
