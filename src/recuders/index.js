import {combineReducers} from 'redux';
import Products from './Products';
import addCart from './addCart';
import changeMessage from './changeMessage';


const myReducers=combineReducers({
    Products,
    addCart,
    changeMessage
})

export default myReducers;