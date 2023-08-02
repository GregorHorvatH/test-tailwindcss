import { Loader } from '../../components/Loader';
import { TodoAddForm, TodoList } from './components';
import { TodosContext } from './context';
import { useTodos } from './hooks';

export const TodosPage = () => {
  const { contextValue, isLoading } = useTodos();

  return (
    <TodosContext.Provider value={contextValue}>
      <div className="todos-page flex flex-col">
        <TodoAddForm />
        {isLoading ? <Loader /> : <TodoList />}
      </div>
    </TodosContext.Provider>
  );
};
