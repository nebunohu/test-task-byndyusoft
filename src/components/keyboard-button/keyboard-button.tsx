import { FC, MouseEvent } from 'react';

// Styles
import styles from './keyboard-button.module.scss';

type TKeyboardButtonProps = {
  value: string;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
  equal?: boolean;
}

const KeyboardButton:FC<TKeyboardButtonProps> = ({ value, onClick, equal }) => {
  const className = `${styles.wrapper} ${equal ? styles.equal : ''}`;
  return (
    <div className={className} onClick={onClick}>
      {value}
    </div>
  );
};

export default KeyboardButton;