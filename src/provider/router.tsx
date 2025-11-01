import { Route, Routes } from "react-router-dom";
import { Skills } from "../page/skills/Skills";
import { Contact } from "../page/contact/Contact";
import { TodoList } from "../page/Project/Todo-List/TodoList";
import { Clicker } from "../page/Project/Clicker/Clicker";

export const Router = () => {
  return (
    <Routes>
      <Route path="/Skills" element={<Skills />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Project/Clicker" element={<Clicker />} />
      <Route path="/Project/Todo-List" element={<TodoList />} />
    </Routes>
  );
};
