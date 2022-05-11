import { FC, useContext } from "react";
import CalculatorContext from "../calculator/calculator-context";

// Styles
import styles from './output-section.module.scss';

const OutputSection: FC = () => {
  const { input, result } = useContext(CalculatorContext);

  return (
    <div className={`${styles.outputSection}`}>
      <div className={`${styles.output}`} data-testid="input">{input}</div>
      <div className={`${styles.result}`} data-testid="result">{result}</div>
    </div>
  );
};

export default OutputSection;