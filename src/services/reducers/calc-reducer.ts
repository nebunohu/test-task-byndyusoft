import { UPDATE_INPUT, CLEAR_CALC, UPDATE_RESULT } from '../actions/calc-actions';
import { TCalcActions } from '../actions/calc-actions';

export type TCalcState = {
  result: string;
  input: string;
  isCalculated: boolean;
};

export const calcInitialState: TCalcState = {
  result: '',
  input: '',
  isCalculated: false,
};

export const calcReducer = (state = calcInitialState, action: TCalcActions): TCalcState => {
  switch (action.type) {
  case CLEAR_CALC: {
    return calcInitialState;
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
      result: action.value,
      isCalculated: true,
    };
  }
  default: return state;
  }
};