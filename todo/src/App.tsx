import { useState } from "react";
import { Form } from "./component/Form";
import { List } from "./component/List/List";

type TypeTodos = {
  id: string;
  item: string;
};

function App() {
  const [todos, setTodos] = useState<TypeTodos[]>([]);

  const handleDelete = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const addTodo = (newItem: string) => {
    setTodos((currentTodos) => [
      ...currentTodos,
      { id: crypto.randomUUID(), item: newItem },
    ]);
  };

  return (
    <>
      <Form addTodo={addTodo} />
      <h1>Todo List</h1>
      <List todos={todos} handleDelete={handleDelete} />
    </>
  );
}

export default App;
