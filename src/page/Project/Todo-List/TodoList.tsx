
import "./TodoList.css";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { addTodo, toggleTodo, deleteTodo } from "./todosSlice";
import { useState } from "react";
import type { KeyboardEvent } from 'react';


export const TodoList: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const { todos } = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch();

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
      dispatch(addTodo(newTodo));
      setInputValue("");
    }
  };

  const onKeyEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") return handleAddTodo()
  };

  const handleToggleTodo = (id?: number) => {
    if (id) {
      dispatch(toggleTodo(id));
    }
  };

  const handleDeleteTodo = (id?: number) => {
    if (id) {
      dispatch(deleteTodo(id));
    }
  };

  return (
    <div className="todo-list-container">
      <h1>Список задач</h1>
      <div className="todo-input-container">
        <input
          onKeyPress={onKeyEnter}
          className="todo-input"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Введите задачу..."
        />
        <button className="add-button" onClick={handleAddTodo}>
          Добавить
        </button>
      </div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li className="todo-item" key={(todo.id)}>
            <span
              className="todo-text"
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
              onClick={() => handleToggleTodo(todo.id)}
            >
              {todo.text}
            </span>
            <button
              className="delete-button"
              onClick={() => handleDeleteTodo(todo.id)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
