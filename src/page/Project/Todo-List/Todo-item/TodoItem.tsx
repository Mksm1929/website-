import { memo } from "react";
import "./TodoItem.css";
import type { Todo } from "../todosSlice";

interface TodoItemProps {
    todo: Todo;
    onToggle: (id?: number) => void;
    onDelete: (id?: number) => void;
};

export const TodoItem = memo(({
    todo,
    onToggle,
    onDelete
}: TodoItemProps) => {

    return (
        <li>
            <div className="todo">
                <div className={`todo-item-status todo-item-status__${todo.completed ? "completed" : "pending"}`} />
                <div className="todo-item">
                    <span
                        className="todo-text"
                        onClick={() => onToggle(todo.id)}
                    >
                        {todo.text}
                    </span>
                    <button
                        className="delete-button"
                        onClick={() => onDelete(todo.id)}
                    >
                        X
                    </button>
                </div>
            </div>
        </li>
    );
});