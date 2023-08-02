import {Button} from "../../../../components";

export type Item = {
  id: string;
  text: string;
  isDone: boolean;
};

interface TodoItemProps {
  item: Item;
}

export const TodoItem = ({ item }: TodoItemProps) => {
  const handleToggle = () => {};

  return (
    <div className="flex todo-item border-2 p-2 rounded gap-x-2 items-center justify-between">
      <div className="flex gap-x-2 items-center">
        <input type="checkbox" checked={item.isDone} onChange={handleToggle} />
        <span>{item.text}</span>
      </div>
      <Button color="error" buttonSize="sm">x</Button>
    </div>
  );
};
