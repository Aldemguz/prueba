import {SET_STATE_ACTION} from './../actions';

const initialState = {
  'array' : [{name: "Adolfo",
edad: 15},
{name:"Aldemaro",
edad: 30}]
};


export const reducer = (state = initialState,action) => {
    if(action.type === SET_STATE_ACTION){

      console.log("store with action && stateinitial / reducer");
      return{...state, 'array': action.value}
    }
      else{
        console.log("no fue SET_STATE_ACTION");
        console.log(state);
      return state;
      }
};
