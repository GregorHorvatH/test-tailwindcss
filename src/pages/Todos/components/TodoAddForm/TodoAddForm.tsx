import { useContext } from 'react';
import { v4 as uuid4 } from 'uuid';
import { FieldValues, useForm } from "react-hook-form";

import { TodosContext } from '../../context';
import { Button } from '../../../../components';

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
      isDone: true,
    });
    reset();
  };

  return (
    <form
      className="todo-add-form flex gap-x-2 justify-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label className="flex gap-x-2 items-center">
        <span className="text-gray-500">Enter text</span>
        <div className="flex flex-col relative">
          <input
            className="rounded"
            placeholder="Enter todo... "
            {...register('todoText', { required: true })}
          />
          {errors.todoText && (
            <span className="absolute top-10 text-red-500">
              this field is required
            </span>
          )}
        </div>
      </label>
      <Button type="submit" buttonSize="xl">+ Add</Button>
    </form>
  );
};
