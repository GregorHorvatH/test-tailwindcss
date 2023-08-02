import { HTMLProps } from 'react';
import cn from 'classnames';

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  className?: string;
  color?: 'primary' | 'warning' | 'error';
  type?: 'button' | 'submit' | 'reset';
}

export const Button = ({
  children,
  className = '',
  color = 'primary',
  type = 'button',
  ...rest
}: ButtonProps) => {
  const classNames = cn({
    'px-10 py-2 rounded text-sky-50': true,
    'bg-red-500 hover:bg-red-600 active:bg-red-400': color === 'error',
    'bg-sky-500 hover:bg-sky-600 active:bg-sky-400': color === 'primary',
    'bg-orange-500 hover:bg-orange-600 active:bg-orange-400': color === 'warning',
    [className]: !!className,
  });

  return (
    <button className={classNames} type={type} {...rest} >
      {children}
    </button>
  );
};
