import axios from 'axios';
import { useCallback, useEffect, useMemo, useState } from 'react';

import { Item } from '../components';
import { TODOS_URL } from '../constants';

export const useTodos = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
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

  const getTodos = () => {
    setIsLoading(true);
    axios.get(TODOS_URL)
      .then(({ data }) => setTodos(data))
      .catch(({ message }) => {
        setError(message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(getTodos, []);

  return { contextValue, error, isLoading };
};
