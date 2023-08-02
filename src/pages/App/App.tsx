import React from 'react';
import { TodosPage } from '../Todos';
import { Title3 } from '../../components';

export const App = () => {
  return (
    <div className="tailwind-test-app">
      <Title3>
        <span>Todos</span>
        <span className="font-thin">(tailwind test app)</span>
      </Title3>
      <TodosPage />
    </div>
  );
}
