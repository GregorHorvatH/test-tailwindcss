import React, { HTMLProps } from 'react';
import { twMerge } from 'tailwind-merge'

interface Title3Props extends HTMLProps<HTMLHeadingElement> {
  className?: string;
}

export const Title = ({ children, className = '', ...rest }: Title3Props) => (
  <h3
    className={
      twMerge(
        'flex items-center text-gray-400 font-bold m-6 gap-x-2',
        className,
      )}
    {...rest}
  >
    {children}
  </h3>
);
