export const execute = (postfixStr: Array<any>) => {
  const stack: Array<any> = [];

    postfixStr.forEach(el => {
      if ( !isNaN(+el) ) {
        stack.push(el);
      } else {
        let temp;
        switch (el) {
        case "+":
          temp = +stack[stack.length-2] + +stack[stack.length-1];
          break;
        case "-":
          temp = +stack[stack.length-2] - +stack[stack.length-1];
          break;
        case "\u00D7":
          temp = +stack[stack.length-2] * +stack[stack.length-1];
          break;
        case "/":
          temp = +stack[stack.length-2] / +stack[stack.length-1];
          break;
        }
        stack.splice(stack.length-2, 2);
        stack.push(temp);
      }
    });

    return stack[0];
}