import { useContext } from 'react';

import { TodoItem } from '../TodoItem';
import { TodosContext } from '../../context';

export const TodoList = () => {
  const { todos } = useContext(TodosContext);

  return (
    <div className="todo-list p-6 flex flex-col gap-y-2">
      {todos.map((item) => <TodoItem key={item.id} item={item} />)}
    </div>
  );
};
