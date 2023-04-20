import { DollarCircleOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import { Menu, MenuProps } from "antd";
import React from "react";

import { useNavigate } from "react-router-dom";

import { routePaths } from "@/shared/constants/routePaths";
import { useCurrentLocationPath } from "@/shared/hooks/useCurrentLocationPath";

type MenuItem = Required<MenuProps>["items"][number];
type OnMenuClickType = MenuProps["onClick"];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Биржи", routePaths.root, <DollarCircleOutlined />),
  getItem("О приложении", routePaths.about.index, <QuestionCircleOutlined />),
];

export const SidebarMenu = () => {
  const navigate = useNavigate();
  const currentLocation = useCurrentLocationPath();

  const onMenuItemClick: OnMenuClickType = (e) => {
    navigate(e.key);
  };

  return (
    <Menu
      theme="dark"
      onClick={onMenuItemClick}
      defaultSelectedKeys={[currentLocation.pathName]}
      mode="inline"
      items={items}
    />
  );
};
