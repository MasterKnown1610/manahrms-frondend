import React, { useState } from "react";
import {
  Home,
  Users,
  Calendar,
  MessageSquareWarning,
  Settings,
  LogOut,
  Menu,
  Bell,
  Search,
} from "lucide-react";
import "./Dashboard.css";

export default function Dashboard() {
  const palette = {
    lightAqua: "#a7ebf2",
    softTeal: "#54acbf",
    mutedBlue: "#26658c",
    deepBlue: "#023859",
    navyBlack: "#011c40",
  };

  const [collapsed, setCollapsed] = useState(false);
  const [active, setActive] = useState("Dashboard");

  const menu = [
    { key: "Dashboard", icon: <Home size={18} /> },
    { key: "Employee Management", icon: <Users size={18} /> },
    { key: "Reports", icon: <MessageSquareWarning size={18} /> },
    { key: "Leave Management", icon: <Calendar size={18} /> },
    { key: "Settings", icon: <Settings size={18} /> },
  ];

  const sampleEmployees = [
    { name: "Umesh", dept: "Hr", join: "2023-02-14", status: "Active" },
    { name: "Kalpana", dept: "HR", join: "2021-11-01", status: "On Leave" },
    { name: "Manaswini", dept: "Finance", join: "2022-05-20", status: "Active" },
    { name: "Karthik", dept: "Founder", join: "2024-01-12", status: "Pending" },
  ];

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside
        className={`sidebar ${collapsed ? "collapsed" : ""}`}
        style={{ background: palette.deepBlue }}
      >
        <div className="sidebar-top">
          <button className="menu-toggle" onClick={() => setCollapsed(!collapsed)}>
            <Menu size={18} color={palette.lightAqua} />
          </button>
          {!collapsed && <h1 className="logo">HRMS</h1>}
        </div>

        <nav className="menu">
          {menu.map((item) => (
            <button
              key={item.key}
              className={`menu-item ${active === item.key ? "active" : ""}`}
              onClick={() => setActive(item.key)}
            >
              {item.icon}
              {!collapsed && <span>{item.key}</span>}
            </button>
          ))}
        </nav>

        <div className="logout-section">
          <button className="menu-item logout-btn">
            <LogOut size={18} />
            {!collapsed && <span>Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="main">
        {/* Header */}
        <header className="header">
          <h2>{active}</h2>
          <div className="header-right">
            <div className="search-box">
              <Search size={16} className="search-icon" />
              <input type="text" placeholder="Search employees..." />
            </div>
            <Bell className="icon" />
            <div className="profile">
              <div className="avatar">A</div>
              <div>
                <div className="name">Admin</div>
                <div className="role">Karthik. K</div>
              </div>
            </div>
          </div>
        </header>

        {/* Cards */}
        <section className="cards">
          <div className="card">
            <p>Total Employees</p>
            <h3>128</h3>
          </div>
          <div className="card">
            <p>Present Today</p>
            <h3>102</h3>
          </div>
          <div className="card">
            <p>On Leave</p>
            <h3>8</h3>
          </div>
          <div className="card">
            <p>Payroll Pending</p>
            <h3>$12,430</h3>
          </div>
        </section>

        {/* Table */}
        <section className="table-section">
          <h3>Recent Employees</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Department</th>
                <th>Join Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {sampleEmployees.map((emp) => (
                <tr key={emp.name}>
                  <td>{emp.name}</td>
                  <td>{emp.dept}</td>
                  <td>{emp.join}</td>
                  <td>
                    <span className={`status ${emp.status.toLowerCase()}`}>
                      {emp.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}
