import { useCallback, useMemo, useState } from 'react';

import { Item, TodoAddForm, TodoList } from './components';
import { TodosContext } from './context';

export const TodosPage = () => {
  const [todos, setTodos] = useState<Item[]>([]);

  const addTodo = useCallback((item: Item) => {
    setTodos(prevItems => [item, ...prevItems]);
  }, []);

  const removeTodo = useCallback((id: string) => {}, []);

  const updateTodo = useCallback((item: Item) => {}, []);

  const contextValue = useMemo(() => ({
    todos, addTodo, removeTodo, updateTodo,
  }), [addTodo, removeTodo, todos, updateTodo]);

  return (
    <TodosContext.Provider value={contextValue}>
      <div className="todos-page flex flex-col">
        <TodoAddForm />
        <TodoList />
      </div>
    </TodosContext.Provider>
  );
};
