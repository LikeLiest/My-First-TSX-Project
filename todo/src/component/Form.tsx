import { FormEvent, useEffect, useState } from "react";
import style from "./Form.module.scss";

export const Form = ({ addTodo }) => {
  const [newItem, setNewItem] = useState("HELLO TSX");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (newItem.trim() === "") return;

    addTodo(newItem);
    setNewItem("");
  }

  return (
    <section>
      <form onSubmit={handleSubmit} className={style.new_item_form}>
        <div>
          <label htmlFor="item">New Item</label>
          <input
            value={newItem}
            onChange={(event) => setNewItem(event.target.value)}
            type="text"
            id="item"
          />
        </div>
        <button>Add</button>
      </form>
    </section>
  );
};
