import todoReducer from "./todoReducer";
import { useReducer, useState } from "react";
import { Card,Button, ListGroup,ListGroupItem, InputGroup, FormControl,Alert } from "react-bootstrap";
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
    <div className="container mt-5 col-md-6" style={{ maxWidth: "400px" }}>   
    <Card style={{ borderWidth: "3px", borderColor:"black"}}>
      <Card.Body>
        <Card.Title className="text-center mb-3">📝 Todo App</Card.Title>
        <Card.Subtitle className="text-center mb-3">Organize your tasks with todo app</Card.Subtitle>
        <InputGroup className="mb-3">
               <FormControl
          placeholder="Enter task"
          value={todo}
          onChange={handleChange}
        />
        <Button variant="success " size="sm" onClick={addTodo}>Add task</Button></InputGroup>
         {isSubmit && !todo.trim() && (
 <Alert variant="danger" className="py-1">
                  Please enter a task
                </Alert>
        )}
 
        <h5 className="mt-3 fs-6" >Total task to do ={todoState.todos.length}</h5>
        <ListGroup variant="flush">
          {todoState.todos.map((todo) => (
            <ListGroupItem key={todo.id}   className="d-flex justify-content-between ">
              {todo.item}
              <Button variant="danger" size="sm" onClick={() => deleteTodo(todo.id)}>Delete task</Button>
            </ListGroupItem>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
    </div>
  
  );
};
export default TodoApp;
