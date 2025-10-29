import React from "react";
import {
  UserOutlined,
  DashboardOutlined,
  SettingOutlined,
  LogoutOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";

const Sidebar = () => {
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
          defaultSelectedKeys={["2"]}
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
          ]}
        />
      </div>

      <div style={{ padding: "20px" }}>
        <Menu
          theme="dark"
          mode="inline"
          selectable={false}
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
