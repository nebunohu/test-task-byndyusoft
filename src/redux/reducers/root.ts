import { UPDATE_INPUT, CLEAR_CALC, UPDATE_RESULT } from './../actions/calc-actions';
import { TCalcActions } from '../actions/calc-actions';
import { combineReducers } from "redux";

export type TCalcState = {
  result: string;
  input: string;
};

const calcInitialState: TCalcState = {
  result: '',
  input: '',
};

export const calcReducer = (state = calcInitialState, action: TCalcActions): TCalcState => {
  switch (action.type) {
  case CLEAR_CALC: {
    return {
      ...state,
      input: '',
      result: ''
    };
  }
  case UPDATE_INPUT: {
    return {
      ...state,
      input: action.value,
    };
  }
  case UPDATE_RESULT: {
    return {
      ...state,
      result: action.value
    };
  }
  default: return state;
  }
};

export const rootReducer = combineReducers({
  calc: calcReducer
});