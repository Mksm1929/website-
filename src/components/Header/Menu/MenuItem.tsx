import type { MenuProps } from "antd";
import { DeploymentUnitOutlined, DesktopOutlined } from "@ant-design/icons";


type MenuItem = Required<MenuProps>["items"][number];

export const items: MenuItem[] = [
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