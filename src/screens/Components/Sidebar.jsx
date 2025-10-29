import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  UserOutlined,
  DashboardOutlined,
  SettingOutlined,
  LogoutOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Map routes to menu keys
  const routeToKeyMap = {
    "/dashboard": "1",
    "/": "1",
    "/employee-management": "2",
    "/profile": "3",
    "/settings": "4",
    "/testing": "5",
  };

  const handleMenuClick = (e) => {
    const routes = {
      1: "/dashboard",
      2: "/employee-management",
      3: "/profile",
      4: "/settings",
      5: "/testing",
    };
    navigate(routes[e.key]);
  };

  const handleLogout = () => {
    // Add your logout logic here
    console.log("Logout clicked");
    // For example: navigate('/login') or clear auth tokens
  };

  return (
    <div
      style={{
        height: "100%",
        background: "linear-gradient(180deg, #001529 0%, #003366 100%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        <h2
          style={{
            color: "#fff",
            textAlign: "center",
            margin: "10px 0 30px 0",
            fontSize: "20px",
            fontWeight: "600",
          }}
        >
          MANA HRMS
        </h2>

        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[routeToKeyMap[location.pathname] || "1"]}
          onClick={handleMenuClick}
          style={{
            background: "transparent",
            border: "none",
          }}
          items={[
            {
              key: "1",
              icon: <DashboardOutlined />,
              label: "Dashboard",
            },
            {
              key: "2",
              icon: <TeamOutlined />,
              label: "Employee Management",
            },
            {
              key: "3",
              icon: <UserOutlined />,
              label: "Profile",
            },
            {
              key: "4",
              icon: <SettingOutlined />,
              label: "Settings",
            },
            {
              key: "5",
              icon: <LogoutOutlined />,
              label: "Testing",
            },
          ]}
        />
      </div>

      <div style={{ padding: "20px" }}>
        <Menu
          theme="dark"
          mode="inline"
          selectable={false}
          onClick={handleLogout}
          style={{
            background: "transparent",
          }}
          items={[
            {
              key: "5",
              icon: <LogoutOutlined />,
              label: "Logout",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Sidebar;
