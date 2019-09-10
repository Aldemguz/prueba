export const SET_STATE_ACTION = 'SET_STATE_ACTION';

export const setStateAction = value => {
  console.log("setStateAction/Action creator")
  return({ 'type': SET_STATE_ACTION, value })}; //Accion creator