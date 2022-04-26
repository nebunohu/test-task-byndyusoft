import { FC, MouseEvent } from 'react';
import { useDispatch, useSelector } from '../../hooks';
import { clearCalc, updateInput, updateResult } from '../../redux/actions/calc-actions';

// Components
import KeyboardButton from '../keyboard-button/keyboard-button';

// Styles
import styles from './keyboard.module.scss';

// Utils
import { toPostfix } from '../../utils/to-postfix';

type TKeyboardProps = {
  prop?: any;
}

const Keyboard: FC<TKeyboardProps> = () => {
  const keys = ["C", "\u221A", "%", "/", "7", "8", "9", "\u00D7", "4", "5", "6", "-", "1", "2", "3", "+", "00", "0", ",", "="];

  const { input } = useSelector(store => store.calc);
  const dispatch = useDispatch();

  

  const calculate = (input: string ): string => {
    //let result = '';
    
    const postfixStr = toPostfix(input);
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
  };

  const onButtonClick = (e: MouseEvent<HTMLElement>) => {
    const target = e.target as Element;
    switch (target.textContent) {
    case "C":
      dispatch(clearCalc());
      break;
    case "=":
      dispatch(updateResult(calculate(input)));
      break;
    default:
      dispatch(updateInput(input+target.textContent));
    } 
  };

  return (
    
    <div className={`${styles.keyboard}`} >
      {keys.map((el, index) => {
        if ( el === "=" ) return <KeyboardButton value={el} onClick={onButtonClick} key={index} equal />;
        return <KeyboardButton value={el} onClick={onButtonClick} key={index}/>;
      })}
    </div>
  );
};

export default Keyboard;