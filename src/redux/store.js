import { createStore, applyMiddleware, compose } from "redux";
//import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from './reducer';

//Primera opción con el compose:
const composeRedux = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeRedux(applyMiddleware(thunk)))

//const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store;