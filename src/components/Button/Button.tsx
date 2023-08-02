import { HTMLProps } from 'react';
import cn from 'classnames';

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  color?: 'primary' | 'warning' | 'error';
  type?: 'button' | 'submit' | 'reset';
}

export const Button = ({ children, color = 'primary', type = 'button', ...rest }: ButtonProps) => {
  const className = cn({
    'px-10 py-2 rounded text-sky-50': true,
    'bg-sky-500 hover:bg-sky-600 active:bg-sky-400': color === 'primary'
  });

  return (
    <button className={className} type={type} {...rest} >
      {children}
    </button>
  );
};
