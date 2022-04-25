import { FC, MouseEvent, MouseEventHandler } from "react";
import KeyboardButton from "../keyboard-button/keyboard-button";

// Styles
import styles from './calculator.module.scss';

const Calculator: FC = () => {
  const keys = ["C", "&radic;", "%", "/", "7", "8", "9", "&times;", "4", "5", "6", "-", "1", "2", "3", "+", "00", "0", ",", "="];
  const onButtonClick = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('test');
  };

  return (
    <div className={`${styles.wrapper}`}>
      <div className={`${styles.outputSection}`}>
        <div className={`${styles.output}`}></div>
        <div className={`${styles.result}`}></div>
      </div>
      <div className={`${styles.keyboard}`}>
        { keys.map((el, index) => <KeyboardButton value={el} onClick={onButtonClick} key={index}/>) }
      </div>
    </div>
  );
};

export default Calculator;