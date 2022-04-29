import { useEffect, useRef, useState, FC, MouseEvent } from 'react';
import { useDispatch, useSelector } from '../../hooks';
import { clearCalc, updateInput, updateResult } from '../../redux/actions/calc-actions';

// Components
import KeyboardButton from '../keyboard-button/keyboard-button';

// Styles
import styles from './keyboard.module.scss';

// Utils
import { toPostfix } from '../../utils/to-postfix';
import { execute } from '../../utils/execute';

// Consts
import { operators } from '../../consts';
import { addTokenToInput } from '../../utils/add-token-to-input';

const checkMultiplication = (token: string | null): string => {
  if (token === operators.multiplication.output) {
    token = operators.multiplication.token;
  } 
  return token ? token : '';
};

const Keyboard: FC = () => {
  const 
    [isKeyPressed, setisKeyPressed] = useState(false),
    keys = [
      "C", 
      operators.square.output, 
      operators.percent.output, 
      operators.division.output, 
      "7", 
      "8", 
      "9", 
      operators.multiplication.output, 
      "4", 
      "5", 
      "6", 
      operators.minus.output, 
      "1", 
      "2", 
      "3", 
      operators.plus.output, 
      "00", 
      "0", 
      operators.comma.output, 
      "="
    ],
    { input, isCalculated } = useSelector(store => store.calc),
    dispatch = useDispatch(),
    calcInputRef = useRef(input),
    isKeyPressedRef = useRef(isKeyPressed),
    isCalculatedRef = useRef(isCalculated);

  const calculate = (infixStr: string ): string => {    
    const postfixStrArray = toPostfix(infixStr);
    const result = execute(postfixStrArray);

    return result;
  };

  const onButtonClick = (e: MouseEvent<HTMLElement>) => {
    const target = e.target as Element;
    const token = checkMultiplication(target.textContent);

    switch (token) {
    case "C":
      dispatch(clearCalc());
      break;
    case operators.square.output:
      if ( !input ) dispatch(updateInput(`${token}(0)`));
      else dispatch(updateInput(`${token}(${input})`));
      break;
    case "=":
      dispatch(updateResult(calculate(input)));
      break;
    default:
      if ( isCalculated ) dispatch(clearCalc());
      dispatch(updateInput(addTokenToInput(token, input, isCalculated)));
    } 
  };

  const onKeyDown = (e: KeyboardEvent) => {
    const input = calcInputRef.current;
    if ( typeof input === 'string') {
      if (e.key !== 'Shift') setisKeyPressed(true);
      if (!isKeyPressedRef.current) {
        switch (e.key) {
        case "Enter":
          dispatch(updateResult(calculate(input)));
          break;
        case "Escape":
          dispatch(clearCalc());
          break;
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '+':
        case '-':
        case '/':
        case '*':
        case '%':
          if ( isCalculatedRef.current ) dispatch(clearCalc());
          
          dispatch(updateInput(addTokenToInput(e.key, input, isCalculatedRef.current)));
          break;
        default:
          if ( e.shiftKey && e.key === '%' ) {
            dispatch(updateInput(addTokenToInput(e.key, input, isCalculatedRef.current)));
          }
        }
      }
    }
  };

  const onKeyUp = () => {
    setisKeyPressed(false);
  };

  useEffect(() => {
    calcInputRef.current = input;
    isKeyPressedRef.current = isKeyPressed;
    isCalculatedRef.current = isCalculated;

  }, [input, isKeyPressed, isCalculated]);

  useEffect(() => {
    document.addEventListener('keydown', (e) => onKeyDown(e));
    document.addEventListener('keyup', () => onKeyUp());
    return () => {
      document.removeEventListener('keydown', (e) => onKeyDown(e));
      document.removeEventListener('keyup', () => onKeyUp());
    };
  }, []);

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