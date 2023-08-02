import React from "react";

interface Title3Props {
  children: JSX.Element[] | JSX.Element;
}

export const Title3 = ({ children }: Title3Props) => (
  <h3 className="text-2xl text-gray-400 font-bold m-6 flex gap-x-2">
    {children}
  </h3>
);
