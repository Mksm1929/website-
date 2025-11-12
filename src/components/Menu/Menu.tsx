import React, { useState } from "react";

import type { MenuProps } from "antd";
import { Menu } from "antd";
import "./Menu.css";
import { useNavigate } from "react-router-dom";
import { DeploymentUnitOutlined, DesktopOutlined } from "@ant-design/icons";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  { key: "1", icon: <DeploymentUnitOutlined />, label: "Навыки", onClick: () => { } },
  {
    key: "sub1",
    icon: <DesktopOutlined />,
    label: "Проекты",
    children: [
      { key: "2", label: "Todo-List" },
      { key: "3", label: "Clicker" },
    ],
  },
];

export const Project: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const handleClickPage = (info: { key: string }) => {
    if (info.key === "1") return navigate("/Skills");
    if (info.key === "2") return navigate("/Todo-List");
    if (info.key === "3") return navigate("/Clicker");
  };

  return (
    <div
      onMouseEnter={() => setCollapsed(false)}
      onMouseLeave={() => setCollapsed(true)}
      style={{ maxWidth: 256, width: "fit-content" }}
    >
      <Menu
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
