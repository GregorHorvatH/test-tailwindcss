import { useCallback, useEffect, useMemo, useState } from 'react';

import { Item } from '../components';
import { deleteTodo, getTodos, postTodo, putTodo } from '../api';

export const useTodos = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [todos, setTodos] = useState<Item[]>([]);

  const addTodo = useCallback((item: Item) => {
    setIsLoading(true);
    postTodo(item)
      .then((newItem) => {
        setTodos(prevItems => [newItem, ...prevItems]);
      })
      .catch(({ message }) => {
        setError(message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const loadTodos = () => {
    setIsLoading(true);
    getTodos()
      .then((items) => setTodos(
        items.sort((a: Item, b: Item) => b.timestamp - a.timestamp)
      ))
      .catch(({ message }) => {
        setError(message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const updateTodo = useCallback((item: Item) => {
    setIsLoading(true);
    putTodo(item)
      .then((newItem) => {
        setTodos(prevItems => prevItems.map(
          (oldItem) => oldItem.id === newItem.id ? newItem : oldItem
        ));
      })
      .catch(({ message }) => {
        setError(message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const removeTodo = useCallback((id: string) => {
    setIsLoading(true);
    deleteTodo(id)
      .then(() => {
        setTodos((prevItems) => prevItems.filter((item) => item.id !== id))
      })
      .catch(({ message }) => {
        setError(message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(loadTodos, []);

  const contextValue = useMemo(() => ({
    todos, addTodo, removeTodo, updateTodo,
  }), [addTodo, removeTodo, todos, updateTodo]);

  return { contextValue, error, isLoading };
};
