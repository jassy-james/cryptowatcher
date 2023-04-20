import { Layout } from "antd";
import React, { useState } from "react";

import { AppTitle } from "./AppTitle";

import { SidebarMenu } from "./SidebarMenu";

import "../../styles/Sidebar.scss";

const { Sider } = Layout;

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider
      className="app--sidebar"
      collapsible
      collapsed={collapsed}
      breakpoint="lg"
      collapsedWidth="0"
      onCollapse={(value) => setCollapsed(value)}
    >
      <AppTitle />
      <SidebarMenu />
    </Sider>
  );
};
