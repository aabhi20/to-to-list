import { useState } from "react";
import "./Form.css";

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false });

  function handleChange(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }

  return (
    <form className="todoform" onSubmit={handleChange} action="">
      <input
        className="input-field"
        onChange={(e) => setTodo({ name: e.target.value, done: false })}
        type="text"
        value={todo.name}
        placeholder="Enter a todo"
      />
      <button className="addbutton" type="submit">
        Add
      </button>
    </form>
  );
}
