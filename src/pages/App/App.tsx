import React from 'react';
import { TodosPage } from '../Todos';
import { Title } from '../../components';

export const App = () => {
  return (
    <div className="tailwind-test-app">
      <Title className='text-2xl'>
        <span>Todos</span>
        <span className="font-thin">(tailwind test app)</span>
      </Title>
      <TodosPage />
    </div>
  );
}
