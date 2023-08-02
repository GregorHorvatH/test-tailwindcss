import React, { HTMLProps } from 'react';
import cn from 'classnames';

interface Title3Props extends HTMLProps<HTMLHeadingElement> {
  className?: string;
}

export const Title = ({ children, className = '', ...rest }: Title3Props) => {
  const classNames = cn({
    'flex items-center text-gray-400 font-bold m-6 flex gap-x-2': true,
    [className]: !!className,
  });

  return (
    <h3 className={classNames} {...rest} >
      {children}
    </h3>
  );
};
