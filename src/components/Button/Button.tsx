import { HTMLProps } from 'react';
import cn from 'classnames';

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
  const classNames = cn({
    'py-2 rounded text-sky-50': true,
    'bg-red-500 hover:bg-red-600 active:bg-red-700': color === 'error',
    'bg-sky-500 hover:bg-sky-600 active:bg-sky-700': color === 'primary',
    'bg-orange-500 hover:bg-orange-600 active:bg-orange-700': color === 'warning',
    'px-2': buttonSize === 'xs',
    'px-4': buttonSize === 'sm',
    'px-6': buttonSize === 'md',
    'px-8': buttonSize === 'lg',
    'px-10': buttonSize === 'xl',
    [className]: !!className,
  });

  return (
    <button className={classNames} type={type} {...rest} >
      {children}
    </button>
  );
};
