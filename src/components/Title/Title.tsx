import React, { HTMLProps } from 'react';
import { twMerge } from 'tailwind-merge'

import './Title.css';

interface Title3Props extends HTMLProps<HTMLHeadingElement> {
  className?: string;
}

export const Title = ({ children, className = '', ...rest }: Title3Props) => (
  <h3
    className={
      twMerge(
        'title',
        className,
      )}
    {...rest}
  >
    {children}
  </h3>
);
