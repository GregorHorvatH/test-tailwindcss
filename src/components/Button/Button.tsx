import { HTMLProps } from 'react';
import cn from 'classnames';
import { twMerge } from 'tailwind-merge'

import './Button.css';

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  buttonSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  color?: 'primary' | 'warning' | 'error';
  type?: 'button' | 'submit' | 'reset';
}

export const Button = ({
  buttonSize = 'md',
  children,
  className = '',
  color = 'primary',
  type = 'button',
  ...rest
}: ButtonProps) => {
  const classes = cn({
    'btn': true,
    [color]: color,
    [buttonSize]: buttonSize,
  });

  return (
    <button className={twMerge(classes, className)} type={type} {...rest} >
      {children}
    </button>
  );
};
