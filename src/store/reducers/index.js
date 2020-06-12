import loggedReducer from './isLogged';
import {combineReducers} from 'redux';
import productsReducer from './products';
import filterReducer from './filter';
import compareReducer from './compare';

const allReducers = combineReducers({ 
    Logged:loggedReducer,
    Products:productsReducer,
    Filter:filterReducer,
    Compare:compareReducer
})
export default allReducers 