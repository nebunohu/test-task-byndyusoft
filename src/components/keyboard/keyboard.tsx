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

const Keyboard: FC = () => {
  const [isKeyPressed, setisKeyPressed] = useState(false);
  const keys = [
    "C", 
    operators.square.value, 
    operators.percent.value, 
    operators.division.value, 
    "7", 
    "8", 
    "9", 
    operators.multiplication.value, 
    "4", 
    "5", 
    "6", 
    operators.minus.value, 
    "1", 
    "2", 
    "3", 
    operators.plus.value, 
    "00", 
    "0", 
    operators.comma.value, 
    "="
  ];

  const { input, isCalculated } = useSelector(store => store.calc);
  const dispatch = useDispatch();  
  const calcInputRef = useRef<string | null>(null);
  const isKeyPressedRef = useRef<boolean | null>(null);

  const calculate = (infixStr: string ): string => {    
    const postfixStrArray = toPostfix(infixStr);
    const result = execute(postfixStrArray);

    return result;
  };

  const onButtonClick = (e: MouseEvent<HTMLElement>) => {
    const target = e.target as Element;
    switch (target.textContent) {
    case "C":
      dispatch(clearCalc());
      break;
    case operators.square.value:
      dispatch(updateInput(`${target.textContent}(${input})`));
      break;
    case "=":
      dispatch(updateResult(calculate(input)));
      break;
    default:
      if ( isCalculated ) dispatch(clearCalc());
      dispatch(updateInput(addTokenToInput(target.textContent as string, input, isCalculated)));
    } 
  };

  const onKeyDown = (e: any) => {
    const input = calcInputRef.current as string;
    if ( typeof input === 'string') {
      setisKeyPressed(true);
      if (!isKeyPressedRef.current) {
        switch (e.key) {
        case "Enter":
          dispatch(updateResult(calculate(input)));
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
          if ( isCalculated ) dispatch(clearCalc());
          
          dispatch(updateInput(addTokenToInput(e.key, input, isCalculated)));
          break;
        default:
        }
      }
    }
  };

  const onKeyUp = (e: any) => {
    setisKeyPressed(false);
  };

  useEffect(() => {
    calcInputRef.current = input;
    isKeyPressedRef.current = isKeyPressed;
  }, [input, isKeyPressed]);

  useEffect(() => {
    document.addEventListener('keydown', (e) => onKeyDown(e));
    document.addEventListener('keyup', (e) => onKeyUp(e));
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