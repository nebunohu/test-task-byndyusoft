import React from "react";

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

const CalculatorContext = React.createContext<TCalcState>(calcInitialState);

export default  CalculatorContext;