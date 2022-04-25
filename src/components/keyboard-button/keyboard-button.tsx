import { FC, MouseEvent } from 'react';

// Styles
import styles from './keyboard-button.module.scss';

type TKeyboardButtonProps = {
  value: string;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void//MouseEventHandler<HTMLDivElement>;
}

const KeyboardButton:FC<TKeyboardButtonProps> = ({ value, onClick }) => {
  return (
    <div className={`${styles.wrapper}`} onClick={onClick}>
      {value}
    </div>
  );
};

export default KeyboardButton;