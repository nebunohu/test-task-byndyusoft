import { operators } from "../consts";

export const execute = (postfixStr: Array<string>) => {
  const stack: Array<number> = [];

  postfixStr.forEach((el, index) => {
    const currentElAsNumber = Number.parseFloat(el);
    if ( !isNaN(currentElAsNumber) ) {
      stack.push(currentElAsNumber);
    } else {
      let temp = 0;
      const first = stack[stack.length-2];
      const second = stack[stack.length-1];
      switch (el) {
      case operators.plus.output:
        temp = first + second;
        break;
      case operators.minus.output:
        temp = first - second;
        break;
      case operators.multiplication.output:
        temp = first * second;
        break;
      case operators.division.output:
        temp = first / second;
        break;
      case operators.square.output:
        temp = Math.sqrt(second);
        break; 
      case operators.percent.output:
        if ( postfixStr[index+1] === operators.plus.output || postfixStr[index+1] === operators.minus.output ) temp = first * second / 100;
        if ( postfixStr[index+1] === operators.multiplication.output || postfixStr[index+1] === operators.division.output ) temp = second / 100;
        break; 
      }
      
      el === operators.percent.output ? stack.splice(stack.length-1, 1) : stack.splice(stack.length-2, 2);
      stack.push(temp);
    }
  });

  const result = stack[0].toString().replace(/\./, ',').slice(0,9);

  return result;
};
