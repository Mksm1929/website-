import { Route, Routes } from "react-router-dom";
import { TodoList } from "../page/Project/Todo-List/TodoList";
import { Clicker } from "../page/Project/Clicker/Clicker";
import { Skills } from "../page/skills/Skills";
import { Home } from "../page/Home/Home";


export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Skills" element={<Skills />} />
      <Route path="/Todo-List" element={<TodoList />} />
      <Route path="/Clicker" element={<Clicker />} />
    </Routes>
  );
};
