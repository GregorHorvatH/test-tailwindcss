import { useContext } from 'react';
import { v4 as uuid4 } from 'uuid';
import { FieldValues, useForm } from "react-hook-form";

import { TodosContext } from '../../context';
import { Button } from '../../../../components';

import './TodoAddForm.css';

export const TodoAddForm = () => {
  const { addTodo } = useContext(TodosContext);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: FieldValues) => {
    addTodo({
      id: uuid4(),
      text: data.todoText,
      checked: false,
      timestamp: Date.now(),
    });
    reset();
  };

  return (
    <form
      className="todo-add-form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label className="flex flex-wrap gap-x-2 items-center">
        <span className="text-gray-500">Todo:</span>
        <div className="flex flex-col flex-1 relative">
          <input
            className="todo-input"
            placeholder="Enter todo text ... "
            {...register('todoText', {
              required: { value: true, message: 'this field is required' },
              maxLength: { value: 50, message: 'maximum length is 50' },
            })}
          />
          {errors?.todoText && (
            <span className="absolute top-10 text-red-500">
              {errors?.todoText?.message as string || 'error'}
            </span>
          )}
        </div>
      </label>
      <Button type="submit" buttonSize="xl">+ Add</Button>
    </form>
  );
};
