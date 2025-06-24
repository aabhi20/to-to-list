import "./todoitem.css";

export default function Todoitem({ item, todos, setTodos }) {
  function handleChange(item) {
    setTodos(todos.filter((todo) => todo !== item));
  }

  function handleclick(name) {
    setTodos(
      todos.map((todo) =>
        todo.name === name ? { ...todo, done: !todo.done } : todo
      )
    );
  }

  const className = item.done ? "completed" : "";

  return (
    <div className="todos">
      <div className="todoitem">
        <span className={className} onClick={() => handleclick(item.name)}>
          {item.name}
        </span>

        <span>
          <button onClick={() => handleChange(item)} className="delbutton">
            x
          </button>
        </span>
      </div>
      <hr className="line" />
    </div>
  );
}
