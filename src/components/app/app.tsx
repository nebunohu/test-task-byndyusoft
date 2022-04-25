import { FC } from "react";
import Calculator from "../calculator/calculator";

// styles
import styles from './app.modules.scss';

const App: FC = () => {
  return (
    <div className={`${styles.calcOverlay}`}>
      <Calculator />
    </div>
  );
};

export default App;