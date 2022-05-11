import { TCalcState } from "../reducers/calc-reducer";

export const SAVE_FORM: "SAVE_FORM" = "SAVE_FORM";
export const CLEAR_CALC: "CLEAR_CALC" = "CLEAR_CALC";
export const UPDATE_INPUT: "UPDATE_INPUT" = "UPDATE_INPUT";
export const UPDATE_RESULT: "UPDATE_RESULT" = "UPDATE_RESULT";

export type TSaveForm = {
  type: typeof SAVE_FORM;
  form: TCalcState;
}

export type TClearCalc = {
  type: typeof CLEAR_CALC;
}

export type TUpdateInput = {
  type: typeof UPDATE_INPUT;
  value: string;
}

export type TUpdateResult = {
  type: typeof UPDATE_RESULT;
  value: string;
}

export const saveForm = (form: TCalcState): TSaveForm => {
  return {
    type: SAVE_FORM,
    form
  };
};

export const clearCalc = (): TClearCalc => {
  return {
    type: CLEAR_CALC
  };
};

export const updateInput = ( value: string ): TUpdateInput => {
  return {
    type: UPDATE_INPUT,
    value
  };
};

export const updateResult = ( value: string ): TUpdateResult => {
  return {
    type: UPDATE_RESULT,
    value
  };
};

export type TCalcActions = TSaveForm | TClearCalc | TUpdateInput | TUpdateResult; 