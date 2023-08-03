import React from 'react';

import { TodosPage } from '../Todos';
import { Title } from '../../components';
import icon from '../../images/tailwind.png';

import './App.css';

export const App = () => {
  return (
    <div className="tailwind-test-app">
      <Title className='text-2xl'>
        <span>Todos</span>
        <img className="h-10" src={icon} alt="tailwind icon" />
        <span className="font-thin">(tailwind test app)</span>
      </Title>
      <TodosPage />
    </div>
  );
}
