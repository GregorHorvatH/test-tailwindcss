import { useContext } from 'react';

import { TodoItem } from '../TodoItem';
import { TodosContext } from '../../context';

export const TodoList = () => {
  const { todos } = useContext(TodosContext);

  return (
    <div className="todo-list px-6 pb-6 flex flex-1 flex-col gap-y-2 overflow-auto">
      {todos.map((item) => <TodoItem key={item.id} item={item} />)}
    </div>
  );
};
