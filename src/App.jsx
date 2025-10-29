import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import Sidebar from "./screens/Components/Sidebar";
import Dashboard from "./screens/Dashboard/Dashboard";
import EmployeeManagement from "./screens/EmployeeManagement/EmployeeManagement";
import Testing from "./screens/Testing/Testing";
import "./App.css";

const { Sider, Content } = Layout;

// Placeholder components for routes that don't exist yet
const Profile = () => (
  <div style={{ padding: "24px" }}>
    <h1>Profile</h1>
    <p>Profile page coming soon...</p>
  </div>
);

const Settings = () => (
  <div style={{ padding: "24px" }}>
    <h1>Settings</h1>
    <p>Settings page coming soon...</p>
  </div>
);

const App = () => {
  return (
    <Router>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider>
          <Sidebar />
        </Sider>
        <Layout>
          <Content>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route
                path="/employee-management"
                element={<EmployeeManagement />}
              />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/testing" element={<Testing />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
