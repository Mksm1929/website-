
import "./TodoList.css";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { addTodo, toggleTodo, deleteTodo } from "./todosSlice";
import { useRef, useState } from "react";
import type { KeyboardEvent } from 'react';
import { Modal } from "antd";


export const TodoList: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<number | null>(null);
  const { todos } = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch();
    const inputRef = useRef<HTMLInputElement>(null)

  const handleAddTodo = () => {
    const text = inputRef.current?.value.trim();
    if (text && text !== "") {
      const newTodo = {
        id: Date.now(),
        text: text,
        completed: false,
      };
      dispatch(addTodo(newTodo));
      if (inputRef.current) {
        inputRef.current.value = "";
      }
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
    id !== undefined && setIsModalOpen(id);
  };

  const handleOk = () => {
    if (isModalOpen) {
      dispatch(deleteTodo(isModalOpen));
    }
    setIsModalOpen(null);
  };

  const handleCancel = () => {
    setIsModalOpen(null);
  };
 
  return (
    <div className="todo-list-container">
      <Modal okText="Да" cancelText="Отменить"
        onOk={handleOk}
        onCancel={handleCancel}
        open={!!isModalOpen}
        title={`Удалить задачу?`} />
      <h1>Список задач</h1>
      <div className="todo-input-container">
        <input
          onKeyPress={onKeyEnter}
          className="todo-input"
          type="text"
          ref={inputRef}
          placeholder="Введите задачу..."
        />
        <button className="add-button" onClick={handleAddTodo}>
          Добавить
        </button>
      </div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={(todo.id)}>
            <div className="todo">
              <div className={`todo-item-status todo-item-status__${todo.completed ? "completed" : "pending"}`} />
              <div className="todo-item" >
                <span
                  className="todo-text"
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
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
