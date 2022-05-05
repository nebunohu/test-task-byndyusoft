import { operators } from "../consts";

export const toPostfix = (input: string): Array<string> => {
  let 
    numAsStr = '';
  const 
    stack: Array<{output: string, token: string, priority: number}> = [],
    postfixStr = [],
    infixStr = input.split('');

  infixStr.forEach(currentToken => {
    if( !isNaN(+currentToken) ) {
      numAsStr += currentToken;
    } else if (currentToken === operators.comma.output) {
      numAsStr += '.';
    }  else if ( currentToken === operators.square.output) {
      stack.push(operators.square);
    } else if (currentToken === operators.bracketOpen.output ) {
      stack.push(operators.bracketOpen);
    } else /**/ {
      if ( numAsStr !== '') {
        postfixStr.push(numAsStr);
        numAsStr = '';
      }
      const currentTokenWithPriority = Object.entries(operators).find(([, value]) => value.output === currentToken);
      if (currentTokenWithPriority) {
        if (stack.length) {
          if(currentToken !== operators.bracketClose.token) {
            if (stack[stack.length-1].priority >= currentTokenWithPriority[1].priority) {
              postfixStr.push(stack[stack.length-1].output);
              stack.pop();
            } 
            stack.push(currentTokenWithPriority[1]);
          } else {
            let i = stack.length-1;
            while (stack.length && stack[i].token !== operators.bracketOpen.token) {
              if (stack[i].token !== operators.bracketOpen.token) postfixStr.push(stack[i].output);
              stack.pop();
              i--;
            }
            if( stack[i].token === operators.bracketOpen.token ) {
              stack.pop();
              postfixStr.push(stack[i-1].output);
              stack.pop();
            }
          }
        } else {
          stack.push(currentTokenWithPriority[1]);
        }

        
      }  else return 'Error';
    }
  });
  if (numAsStr) postfixStr.push(numAsStr);
  if (stack.length) {
    stack.reverse().forEach(el => {
      if(el.output !== operators.bracketClose.output) postfixStr.push(el.output);
    });
  }
  return postfixStr;
};