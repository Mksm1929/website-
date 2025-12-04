
import "./TodoList.css";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { addTodo, toggleTodo, deleteTodo } from "./todosSlice";
import { useCallback, useRef, useState } from "react";
import type { KeyboardEvent } from 'react';
import { Modal } from "antd";
import { TodoItem } from "./Todo-item/TodoItem";


export const TodoList: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<number | null>(null);
  const { todos } = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleAddTodo = useCallback(() => {
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
  }, []);

  const onKeyEnter = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") return handleAddTodo()
  }, []);

  const handleToggleTodo = useCallback((id?: number) => {
    if (id) {
      dispatch(toggleTodo(id));
    }
  }, []);

  const handleDeleteTodo = useCallback((id?: number) => {
    id !== undefined && setIsModalOpen(id);
  }, []);

  const handleOk = () => {
    if (isModalOpen) {
      dispatch(deleteTodo(isModalOpen));
    };
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
          <TodoItem key={todo.id} todo={todo} onToggle={handleToggleTodo} onDelete={handleDeleteTodo} />
        ))}
      </ul>
    </div>
  );
};
