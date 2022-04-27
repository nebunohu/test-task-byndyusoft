import { operators } from "../consts";

export const toPostfix = (input: string): Array<string> => {
  let 
    numAsStr = '';
  const 
    stack: Array<{value: string, priority: number}> = [],
    postfixStr = [],
    infixStr = input.split('');

  infixStr.forEach(currentToken => {
    if( !isNaN(+currentToken) ) {
      numAsStr += currentToken;
    } else if (currentToken === operators.comma.value) {
      numAsStr += '.';
    } else if ( numAsStr !== '') {
      postfixStr.push(numAsStr);
      numAsStr = '';
      const currentTokenWithPriority = Object.entries(operators).find(([, value]) => value.value === currentToken);
      if (currentTokenWithPriority) {
        if (stack.length) {
          
          if (stack[stack.length-1].priority >= currentTokenWithPriority[1].priority) {
            postfixStr.push(stack[stack.length-1].value);
            stack.pop();
          }
        } 
        stack.push(currentTokenWithPriority[1]);
      } else return 'Error';
    } else if (currentToken === operators.square.value) {
      stack.push(operators.square);
    }
  });
  if (numAsStr) postfixStr.push(numAsStr);
  if (stack.length) {
    stack.reverse().forEach(el => postfixStr.push(el.value));
  }
  return postfixStr;
};