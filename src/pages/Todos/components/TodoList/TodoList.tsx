import { useContext } from 'react';

import { TodoItem } from '../TodoItem';
import { TodosContext } from '../../context';

import './TodoList.css';

export const TodoList = () => {
  const { todos } = useContext(TodosContext);

  return (
    <div className="todo-list">
      {todos.map((item) => <TodoItem key={item.id} item={item} />)}
    </div>
  );
};
