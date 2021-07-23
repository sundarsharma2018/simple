import {createStore, compose, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import homeReducer from './reducers/homeReducer';
 
const initialState = {};
const reducer = combineReducers ({
    homeReducer: homeReducer
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore (
  reducer,
  initialState,
  composeEnhancer (applyMiddleware (thunk))
);
export default store;










//base redux store file code

// import {createStore, compose, applyMiddleware, combineReducers} from 'redux';
// import thunk from 'redux-thunk';

// const initialState = {};
// const reducer = combineReducers ({
// });
// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore (
//   reducer,
//   initialState,
//   composeEnhancer (applyMiddleware (thunk))
// );

// export default store;
