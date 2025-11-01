import { useState } from "react";
import "./TodoList.css";

type Todo = {
  id?: number,
  text?: string,
  completed?: boolean,
}


export const TodoList: React.FC<Todo> = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        text: inputValue,
        completed: false,
      };
      console.log(newTodo.id)
      setTodos(prevTodos => [...prevTodos, newTodo]);
      setInputValue("");
    }
  };

  const handleToggleTodo = (id?: number) => {
    setTodos(prevTodos => 
      prevTodos.map((todo) => todo.id === id ? {...todo, completed: !todo.completed} : todo)
    );
  };

  const handleDeleteTodo = (id?: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-list-container">
      <h1>My Todo List</h1>
      <div className="todo-input-container">
        <input
          className="todo-input"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Введите задачу..."
        />
        <button className="add-button" onClick={handleAddTodo}>Добавить</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li className="todo-item" key={todo.id}>
            <span className="todo-text"
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
              onClick={() => handleToggleTodo(todo.id)}
            >
              {todo.text}
            </span>
            <button className="delete-button" onClick={() => handleDeleteTodo(todo.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};


