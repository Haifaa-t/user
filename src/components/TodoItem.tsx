// src/components/TodoItem.tsx
type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

const TodoItem = ({ todo }: { todo: Todo }) => {
  return (
    <li className="mb-2">
      <span className={todo.completed ? 'text-green-600 font-semibold' : 'text-red-600'}>
        {todo.completed ? '✔' : '✘'}
      </span>{' '}
      {todo.title}
    </li>
  );
};

export default TodoItem;
