import { operators } from "../consts";

export const toPostfix = (input: string): Array<string> => {
  let stack: Array<{value: string, priority: number}> = [],
    numAsStr = '';
  const 
    postfixStr = [],
    infixStr = input.split('');

  infixStr.forEach(currentToken => {
    if( !isNaN(+currentToken) ) {
      numAsStr += currentToken;
    } else if ( numAsStr !== '') {
      postfixStr.push(numAsStr);
      numAsStr = '';
      const currentTokenWithPriority = operators.find(el => el.value === currentToken);
      if (currentTokenWithPriority) {
        if (stack.length) {
          
          if (stack[stack.length-1].priority >= currentTokenWithPriority.priority) {
            postfixStr.push(stack[stack.length-1].value);
            stack.pop();
          }
        } 
        stack.push(currentTokenWithPriority);
      } else return 'Error';
    } 
  });
  if (numAsStr) postfixStr.push(numAsStr);
  if (stack.length) {
    stack.reverse().forEach(el => postfixStr.push(el.value));
  }
  return postfixStr;
};