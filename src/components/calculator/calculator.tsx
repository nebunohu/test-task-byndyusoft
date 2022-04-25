import { FC, MouseEvent, MouseEventHandler } from "react";
import KeyboardButton from "../keyboard-button/keyboard-button";

// Styles
import styles from './calculator.module.scss';

const Calculator: FC = () => {
  const keys = ["C", "\u221A", "%", "/", "7", "8", "9", "\u00D7", "4", "5", "6", "-", "1", "2", "3", "+", "00", "0", ",", "="];
  const onButtonClick = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('test');
  };

  return (
    <div className={`${styles.wrapper}`}>
      <div className={`${styles.outputSection}`}>
        <div className={`${styles.output}`}>123+123</div>
        <div className={`${styles.result}`}>246</div>
      </div>
      <div className={`${styles.keyboard}`}>
        { keys.map((el, index) => <KeyboardButton value={el} onClick={onButtonClick} key={index}/>) }
      </div>
    </div>
  );
};

export default Calculator;