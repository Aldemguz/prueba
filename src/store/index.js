import { createStore} from "redux";
//import thunk from 'redux-thunk';
import {reducer} from './../reducers/state';

/*const initialState = {
  'array' : [{name: "Adolfo",
edad: 15},
{name:"Aldemaro",
edad: 30}]
};*/

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


//export const store = createStore(reducer,composeEnhancers(applyMiddleware(thunk)));

export const store = createStore(reducer,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());