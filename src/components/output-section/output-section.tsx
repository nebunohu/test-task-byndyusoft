import { FC } from "react";

// Styles
import styles from './output-section.module.scss';

type TOutputSectionProps = {
  inputValue?: string;
  result?: string;
  
};

const OutputSection: FC<TOutputSectionProps> = ({ inputValue, result }) => {
  return (
    <div className={`${styles.outputSection}`}>
      <div className={`${styles.output}`}>{inputValue}</div>
      <div className={`${styles.result}`}>{result}</div>
    </div>
  );
};

export default OutputSection;