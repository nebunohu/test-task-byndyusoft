import { operators } from "../consts";

export const addTokenToInput = (token: string, input: string, isCalculated: boolean): string => {
  let returnString = '';
  
  let 
    key: keyof typeof operators,
    isLastOperator = false,
    isCurrentOperator = false;
  
  for (key in operators) {
    if(operators[key].value === input[input.length-1]) isLastOperator = true;
    if(operators[key].value === token || token === '*') isCurrentOperator = true;
  }

  if ( !input )  {
    if ( isCurrentOperator ) input += '0';
    if ( token === '00') token = '0';
  }

  if ( input === '0' && ( token === '00' || token === '0')) token = '';

  if (isCalculated && isCurrentOperator) token = '0' + token;

  if ( isLastOperator && isCurrentOperator ) returnString = `${input.slice(0, input.length-1)}${token === '*' ? operators.multiplication.value : token}`;
  else returnString = `${(isCalculated ? '' : input)}${token === '*' ? operators.multiplication.value : token}`;

  return returnString;
};
