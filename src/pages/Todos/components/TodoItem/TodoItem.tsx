export type Item = {
  id: string;
  text: string;
  isDone: boolean;
};

interface TodoItemProps {
  item: Item;
}

export const TodoItem = ({ item }: TodoItemProps) => (
  <div className="todo-item border-2 p-2 rounded">
    <p>item: {JSON.stringify(item)}</p>
  </div>
);
