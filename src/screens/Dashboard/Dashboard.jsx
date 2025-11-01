import React from "react";
import { FaBell, FaEmpire, FaMoon } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import {BiCart, BiPackage } from "react-icons/bi";
import { FaPeopleGroup } from "react-icons/fa6";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Dashboard.css";

// commit
const Dashboard = () => {
  const Employees = [
    { name: "Karthik.K", role: "Founder CEO" },
    { name: "Umesh", role: "Frontend Devepoler" },
    { name: "Kalpana", role: "Frontend Devepoler" },
    { name: "Manaswini", role: "Backend Devepoler" },
  ];

  return (
    <div className="dashboard-main">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Dashboard Overview</h1>
        <div className="dashboard-header-actions">
          <div className="search-container">
            
          </div>
          <FaMoon className="icon-button" />
          <FaBell className="icon-button" />
        </div>
      </div>

      {/* Overview Cards */}
      <div className="cards-grid">
        {[
          { icon: FaPeopleGroup, label: "Total Employees", value: 10 },
          { icon: BiCart, label: "Presented Employees", value: 7 },
          { icon: BiPackage, label: "Absent Employees", value: 3 },
        ].map((card, idx) => (
          <div
            key={idx}
            className={`stat-card ${card.highlight ? "highlight" : ""}`}
          >
            <card.icon className="stat-icon" />
            <h2 className="stat-value">{card.value}</h2>
            <p className="stat-label">{card.label}</p>
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="stats-grid">
        {/* Total Users */}
        <div className="stats-card">
          <FiUsers className="stats-icon" />
          <p className="stats-value">10</p>
          <p className="stats-label">Total Employees</p>
        </div>

        {/* Inventory Values */}
        <div className="stats-card">
          <div className="chart-container">
            <svg viewBox="0 0 36 36" className="circular-chart">
              <path
                className="circle-bg"
                strokeWidth="3.8"
                fill="none"
                stroke="#E5E7EB"
                d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="circle"
                strokeWidth="3.8"
                fill="none"
                stroke="#2F4F6F"
                strokeDasharray="68, 100"
                d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <div className="chart-center">
              <p className="chart-percentage">72%</p>
            </div>
          </div>
          <div className="chart-legend">
            <p>Active: 72%</p>
            <p>On Leave: 28%</p>
          </div>
        </div>

        {/* Top 10 Stores by sales */}
        <div className="stats-card">
          <h2 className="stats-card-title">Top Departments</h2>
          <ul className="list-items">
            {Employees.map((emp, idx) => (
              <li key={idx} className="list-item">
                <span>{emp.name}</span>
                <span className="list-value">{emp.role}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
