import { createContext } from 'react';
import { Item } from '../components';

export interface TodosContextProps {
  todos: Item[];
  addTodo: (item: Item) => void;
  removeTodo: (id: string) => void;
  updateTodo: (item: Item) => void;
}

export const TodosContext = createContext<TodosContextProps>({
  todos: [],
  addTodo: () => {},
  removeTodo: () => {},
  updateTodo: () => {},
});
