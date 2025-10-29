import React from "react";
import { Layout } from "antd";
import Sidebar from "./screens/Components/Sidebar";
import EmployeeManagement from "./screens/EmployeeManagement/EmployeeManagement";
import "./App.css";

const { Sider, Content } = Layout;

const App = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider>
        <Sidebar />
      </Sider>
      <Layout>
        <Content>
          <EmployeeManagement />
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;