import React from "react";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  DashboardOutlined,
  BarChartOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import EmployeeManagement from "./screens/EmployeeManagement/EmployeeManagement";
import "./App.css";

const { Header, Content, Sider } = Layout;

const App = () => {
  return (
    <Layout className="app-layout">
      {/* Sidebar */}
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        className="sidebar"
      >
        <div className="logo">MANA HRMS</div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["2"]}
          items={[
            {
              key: "1",
              icon: <DashboardOutlined />,
              label: "Dashboard",
            },
            {
              key: "2",
              icon: <UserOutlined />,
              label: "Employee Management",
            },
            {
              key: "3",
              icon: <BarChartOutlined />,
              label: "Reports",
            },
            {
              key: "4",
              icon: <FileTextOutlined />,
              label: "Documents",
            },
          ]}
        />
      </Sider>

      {/* Main Content Area */}
      <Layout>
        <Header className="header">
          <h1>Employee Management System</h1>
        </Header>

        <Content className="content-area">
          <div className="content-wrapper">
            <EmployeeManagement />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
