import "./Footer.css";

export default function Footer({ completedTodos, totalTodos }) {
  return (
    <div className="footer">
      <span className="item">Completed todos: {completedTodos}</span>
      <span className="item">Total Todos: {totalTodos}</span>
    </div>
  );
}
