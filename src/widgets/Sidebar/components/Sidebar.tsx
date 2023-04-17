import { Menu, Layout, MenuProps } from "antd";
import React, { useState } from "react";

import { SidebarMenu } from "@/entities/SidebarMenu";

const { Sider } = Layout;

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
      <div style={{ height: 32, margin: 16, background: "rgba(255, 255, 255, 0.2)" }} />
      <SidebarMenu />
    </Sider>
  );
};
