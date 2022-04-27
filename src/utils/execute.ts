import { operators } from "../consts";

export const execute = (postfixStr: Array<string>) => {
  const stack: Array<number> = [];

  postfixStr.forEach((el, index) => {
    if ( !isNaN(Number.parseFloat(el)) ) {
      stack.push(Number.parseFloat(el));
    } else {
      let temp = 0;
      const first = stack[stack.length-2];
      const second = stack[stack.length-1];
      switch (el) {
      case operators.plus.value:
        temp = first + second;
        break;
      case operators.minus.value:
        temp = first - second;
        break;
      case operators.multiplication.value:
        temp = first * second;
        break;
      case operators.division.value:
        temp = first / second;
        break;
      case operators.square.value:
        temp = Math.sqrt(second);
        break; 
      case operators.percent.value:
        if ( postfixStr[index+1] === operators.plus.value ) temp = first * second / 100;
        if ( postfixStr[index+1] === operators.multiplication.value ) temp = second / 100;
        break; 
      }
      
      el === operators.percent.value ? stack.splice(stack.length-1, 1) : stack.splice(stack.length-2, 2);
      stack.push(temp);
    }
  });

  const result = stack[0].toString().replace(/\./, ',').slice(0,9);

  return result;
};
