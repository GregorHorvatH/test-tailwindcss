import { useCallback, useMemo, useState } from 'react';
import { Item } from '../components';

export const useTodos = () => {
  const [todos, setTodos] = useState<Item[]>([]);

  const addTodo = useCallback((item: Item) => {
    setTodos(prevItems => [item, ...prevItems]);
  }, []);

  const removeTodo = useCallback((id: string) => {
    console.log('remove:', id);
  }, []);

  const updateTodo = useCallback((item: Item) => {
    console.log('update:', item);
  }, []);

  const contextValue = useMemo(() => ({
    todos, addTodo, removeTodo, updateTodo,
  }), [addTodo, removeTodo, todos, updateTodo]);

  return { contextValue };
};
