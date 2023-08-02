import { TodoAddForm, TodoList } from './components';
import { TodosContext } from './context';
import { useTodos } from './hooks';

export const TodosPage = () => {
  const { contextValue } = useTodos();

  return (
    <TodosContext.Provider value={contextValue}>
      <div className="todos-page flex flex-col">
        <TodoAddForm />
        <TodoList />
      </div>
    </TodosContext.Provider>
  );
};
