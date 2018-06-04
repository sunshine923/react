import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import rootReducer from '../reducers/rootReducer';

let store = applyMiddleware(thunk,logger)(createStore)(rootReducer);
export default store;