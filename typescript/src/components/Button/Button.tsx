// * Base
import { EButton } from '../../types/button.types';
import styles from './Button.module.css';
import cn from 'classnames';

import React from 'react';

// * Types Local
type TProps = {
  disabled: boolean;
  text: string;
  href: string;
  type: EButton;
  color: EColor;
  onClick: () => void;
};

enum EColor {
  DEFAULT = 'default',
  WHITE = 'white',
  RED = 'red',
}

const Button: React.FC<TProps> = ({
  text = 'default text',
  type,
  color,
  href = '',
  onClick,
  disabled = false,
}) => {
  const stylelist = [styles.button];

  switch (color) {
    case EColor.RED: {
      stylelist.push(styles.red);
      break;
    }
    case EColor.WHITE: {
      stylelist.push(styles.white);
      break;
    }
    default: {
      console.log('!!!');
    }
  }

  if (href)
    return (
      <Link text={text} href={href} onClick={onClick} stylelist={stylelist} />
    );

  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(stylelist)}
      disabled={disabled}
    >
      <span> {text}</span>
    </button>
  );
};

type TLinkProps = {
  text: string;
  href: string;
  stylelist: string[];
  onClick: () => void;
};

const Link: React.FC<TLinkProps> = ({ text, onClick, stylelist }) => {
  return (
    <a target='_blank' onClick={onClick} className={cn(stylelist)}>
      <span> {text}</span>
    </a>
  );
};

export default Button;
