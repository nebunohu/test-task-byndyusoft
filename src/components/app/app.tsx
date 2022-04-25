import { FC } from "react";

// styles
import styles from './app.modules.scss';

const App: FC = () => {
  return (
    <div className={`${styles.calcOverlay}`}></div>
  );
};

export default App;