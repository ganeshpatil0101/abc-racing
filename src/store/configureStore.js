import {configureStore} from '@reduxjs/toolkit';
import {createInjectorsEnhancer} from 'redux-injectors';
import createSagaMiddleware from 'redux-saga';
import {createReducer} from './createReducer';

//.concat(routerMiddleware(history))
const createStore = (initState, sagaMiddleware, history) => {
  const {run: runSaga} = sagaMiddleware;
  const dynamicLoadReducers = [createInjectorsEnhancer({
    createReducer,
    runSaga
  })]
  const baseStore = configureStore({
    reducer: createReducer(),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({thunk:false}).concat(sagaMiddleware),
    devTools: process.env.NODE_ENV !== 'production',
    preloadState: initState,
    enhancers: dynamicLoadReducers
  });
  // let hotModule = null;
  // try{
  //   hotModule = module?.hot;
  // } catch(e) {
  //   hotModule = import.meta?.webpackHot;
  // }
  // if(hotModule) {
  //   hotModule.accept('./reducers', ()=>{
  //     forceReducerReload(baseStore);
  //   })
  // }
  return baseStore;
};

let appStore = null;
export const createAppStore = (initState, history) => {
  try{
    const store = createStore(initState, createSagaMiddleware({}), history);
    appStore = store;
  } catch(e) {
    console.error('error while creatingg store ');
    console.trace(e);
  }
  return appStore;
}
