import { useState } from "react";
import Todoitem from "./Todoitem";
import Form from "./Form";
import Todos from "./Todolist";
import Todolist from "./Todolist";
import Footer from "./Footer";

export default function Todo() {
  const [todos, setTodos] = useState([]);

  const completedTodos = todos.filter((todo) => todo.done).length;
  const totalTodos=todos.length
  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <Todolist todos={todos} setTodos={setTodos} />
      <Footer completedTodos={completedTodos} totalTodos={totalTodos} />
    </div>
  );
}
