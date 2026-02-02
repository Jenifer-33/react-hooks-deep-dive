import todoReducer from "./todoReducer";
import { useReducer, useState } from "react";
const TodoApp = () => {
  const initialState = {
    todos: [],
  };
  const [todoState, dispatch] = useReducer(todoReducer, initialState);
  const [todo, setTodo] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const addTodo = () => {
    setIsSubmit(true);
    if (todo.trim() == "") return;
    dispatch({
      type: "ADD_TODO",
      payload: { id: Date.now(), item: todo },
    });
    setIsSubmit(false);
    setTodo("");
  };
  const deleteTodo = (id) => {
    dispatch({ type: "DELETE_TODO", payload: id });
  };
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  return (
    <div>
      <h2>ToDo App</h2>
      <p>Organize your tasks with todo app</p>
      <input
        placeholder="Enter task"
        value={todo}
        onChange={handleChange}
      />{" "}
      {isSubmit && !todo.trim() && (
        <p style={{ color: "red" }}>Enter your task before submitting</p>
      )}
      <button onClick={addTodo}>Submit task</button>
      <h4>Total task to do ={todoState.todos.length}</h4>
      <ul>
        {todoState.todos.map((todo) => (
          <li key={todo.id}>
            {todo.item}
            <button onClick={() => deleteTodo(todo.id)}>Delete task</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TodoApp;
