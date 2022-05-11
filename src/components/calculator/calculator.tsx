import { FC, useReducer } from "react";
import Keyboard from "../keyboard/keyboard";
import OutputSection from "../output-section/output-section";
import CalculatorContext, {calcInitialState} from './calculator-context';
import { calcReducer } from "../../services/reducers/calc-reducer";

// Styles
import styles from './calculator.module.scss';

const Calculator: FC = () => {
  const [calcState, dispatch] = useReducer(calcReducer, calcInitialState);
  
  return (
    <CalculatorContext.Provider value={calcState}>
      <div className={`${styles.wrapper}`}>
        <OutputSection />
        <Keyboard dispatch={dispatch} />
      </div>
    </CalculatorContext.Provider>
  );
};

export default Calculator;