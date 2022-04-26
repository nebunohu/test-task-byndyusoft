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
          
          const stackCopy = stack.reverse().filter(el => {
            if (el.priority > currentTokenWithPriority.priority) {
              postfixStr.push(el.value);
              
            } else return el;
          });
          stack = stackCopy as Array<{value: string, priority: number}>;
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