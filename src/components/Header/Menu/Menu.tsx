import { useState } from "react";
import { Menu as Navigation } from "antd";
import "./Menu.css";
import { useNavigate } from "react-router-dom";
import { items } from "./MenuItem";


export const Menu = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const handleClickPage = (info: { key: string }) => {
    if (info.key === "1") return navigate("/Skills");
    if (info.key === "2") return navigate("/Todo-List");
    if (info.key === "3") return navigate("/Clicker");
  };

  return (
    <div className="container-menu"
      onMouseEnter={() => setCollapsed(false)}
      onMouseLeave={() => setCollapsed(true)}
    >
      <Navigation
        getPopupContainer={() => document.body}
        className="left-oriented-submenu"
        mode="horizontal"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
        onClick={handleClickPage}
      />
    </div>
  );
};
