import moment from 'moment';
import { useContext } from 'react';

import { CREATE_DATE_FORMAT } from '../../constants';
import { TodosContext } from '../../context';
import { Button } from '../../../../components';

import './TodoItem.css';

export type Item = {
  id: string;
  text: string;
  checked: boolean;
  timestamp: number;
};

interface TodoItemProps {
  item: Item;
}

export const TodoItem = ({ item }: TodoItemProps) => {
  const { removeTodo, updateTodo } = useContext(TodosContext);

  const handleToggle = () => {
    updateTodo({
      ...item,
      checked: !item.checked,
    });
  };

  const handleRemove = () => {
    removeTodo(item.id);
  };

  return (
    <div className="todo-item">
      <div className="flex flex-col break-all">
        <label className="flex gap-x-2 items-center text-gray-600 cursor-pointer">
          <input
            type="checkbox"
            className="text-primary-500 rounded cursor-pointer"
            checked={item.checked}
            onChange={handleToggle}
          />
          <span className="text-gray-500 hover:text-gray-700">{item.text}</span>
        </label>
        <span className="text-gray-400 text-xs">
          {moment(item.timestamp).format(CREATE_DATE_FORMAT)}
        </span>
      </div>
      <Button color="error" buttonSize="sm" onClick={handleRemove}>x</Button>
    </div>
  );
};
