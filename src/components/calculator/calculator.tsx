import { FC } from "react";
import { useSelector } from "../../hooks";
import Keyboard from "../keyboard/keyboard";
import OutputSection from "../output-section/output-section";

// Styles
import styles from './calculator.module.scss';

const Calculator: FC = () => {
  const { result, input } = useSelector(store => store.calc);
  // const Keyboard = lazy(() => import('../keyboard/keyboard'));
  // const OutputSection = lazy(() => import('../output-section/output-section'));
  
  return (
    <div className={`${styles.wrapper}`}>
      <OutputSection inputValue={input} result={result} />
      <Keyboard />
    </div>
  );
};

export default Calculator;