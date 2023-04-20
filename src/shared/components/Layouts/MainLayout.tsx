import { Layout, theme } from "antd";
import { Outlet } from "react-router-dom";

import { Sidebar } from "@/shared/components/Sidebar";

const { Header, Content } = Layout;

export const MainLayout = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: "0 16px" }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
