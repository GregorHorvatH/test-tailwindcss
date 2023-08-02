import { ChangeEvent, FormEvent, useContext, useState} from 'react';
import { v4 as uuid4 } from 'uuid';

import { TodosContext } from '../../context';
import { Button } from '../../../../components';

export const TodoAddForm = () => {
  const { addTodo } = useContext(TodosContext);
  const [value, setValue] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    addTodo({
      id: uuid4(),
      text: value,
      isDone: false,
    });
    setValue('');
  };

  return (
    <form className="todo-add-form flex gap-x-2 justify-center" onSubmit={handleSubmit}>
      <label className="flex gap-x-2 items-center">
        <span className="text-gray-600">Enter text</span>
        <input
          className="rounded"
          type="text"
          name="todo-text"
          placeholder="Enter todo... "
          value={value}
          onChange={handleChange}
        />
      </label>
      <Button type="submit">+ Add</Button>
    </form>
  );
};
