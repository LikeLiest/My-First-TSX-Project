import { useEffect, useRef } from "react";
import style from './List.module.scss'

type TypeListProps = {
  todos: {
    id: string;
    item: string;
  }[];
  handleDelete: (id: string) => void;
};

export const List: React.FC<TypeListProps> = ({ todos, handleDelete }) => {
  const ref = useRef<HTMLUListElement>(null);

  // Во время разработки React вызывает все хуки дважды,
  // чтобы обнаружить проблемы в компонентах, связанные с побочными эффектами

  useEffect(() => {
    if (ref.current) console.log(ref.current);
  }, [todos]);

  return (
    <ul className={style.list} ref={ref}>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.item}
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
