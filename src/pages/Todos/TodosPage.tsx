import { Loader } from '../../components/Loader';
import { TodoAddForm, TodoList } from './components';
import { TodosContext } from './context';
import { useTodos } from './hooks';

import './TodosPage.css';

export const TodosPage = () => {
  const { contextValue, isLoading } = useTodos();

  return (
    <TodosContext.Provider value={contextValue}>
      <div className="todos-page">
        <TodoAddForm />
        {isLoading ? <Loader /> : <TodoList />}
      </div>
    </TodosContext.Provider>
  );
};
