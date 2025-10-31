import React from "react";
import {
  HomeOutlined,
  UserOutlined,
  FileTextOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="Admin"
          className="avatar"
        />
        <h3>Admin</h3>
        <p>HR Manager</p>
      </div>

      <div className="menu">
        <div className="menu-item active">
          <UserOutlined />
          <span>Employee Management</span>
        </div>
        <div className="menu-item">
          <HomeOutlined />
          <span>Dashboard</span>
        </div>
        <div className="menu-item">
          <FileTextOutlined />
          <span>Recruitment</span>
        </div>
        <div className="menu-item">
          <SettingOutlined />
          <span>Settings</span>
        </div>
      </div>

      <button className="logout-btn">
        <LogoutOutlined />
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
