import {combineReducers} from '@reduxjs/toolkit';
import defaultReducer from './defaultReducer';

export const createReducer = (injectedRed = {}) =>{
    const mainReducer = combineReducers({
        default: defaultReducer.reducer,
        ...injectedRed
    });
    return mainReducer;
}
