import { operators } from "../consts";



export const addTokenToInput = (token: string, input: string, isCalculated: boolean): string => {
  let returnString = '',
    key: keyof typeof operators,
    isLastOperator = false,
    isCurrentOperator = false;
  
  for (key in operators) {
    if( operators[key].output === input[input.length-1] && input[input.length-1] !== operators.bracketClose.output) isLastOperator = true;
    if( operators[key].token === token ) {
      isCurrentOperator = true;
      if (key === 'multiplication') token = operators.multiplication.output;
    }
  }

  if ( !input )  {
    if ( isCurrentOperator ) input += '0';
    if ( token === '00') token = '0';
  }

  if ( input === '0' && ( token === '00' || token === '0')) token = '';

  if (isCalculated && isCurrentOperator) token = '0' + token;

  if ( isLastOperator && isCurrentOperator ) returnString = `${input.slice(0, input.length-1)}${token}`;
  else returnString = `${(isCalculated ? '' : input)}${token}`;

  return returnString;
};
