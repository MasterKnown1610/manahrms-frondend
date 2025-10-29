import React from "react";
import { FaBell, FaMoon } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { BiCube, BiCart, BiPackage } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Dashboard.css";

const Dashboard = () => {
  const topStores = [
    { name: "Gateway str", sales: "874k" },
    { name: "The Rustic Fox", sales: "721k" },
    { name: "Velvet Vine", sales: "598k" },
    { name: "Blue Harbor", sales: "506k" },
    { name: "Nebula Novelties", sales: "395k" },
    { name: "Crimson Crafters", sales: "344k" },
    { name: "Tidal Treasures", sales: "274k" },
  ];

  return (
    <div className="dashboard-main">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Dashboard Overview</h1>
        <div className="dashboard-header-actions">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
            />
          </div>
          <FaMoon className="icon-button" />
          <FaBell className="icon-button" />
        </div>
      </div>

      {/* Overview Cards */}
      <div className="cards-grid">
        {[
          { icon: BiCube, label: "Total Products", value: 5483 },
          { icon: BiCart, label: "Orders", value: 2859 },
          { icon: BiPackage, label: "Total Stock", value: 5483 },
          {
            icon: AiOutlineShoppingCart,
            label: "Out of Stock",
            value: 38,
            highlight: true,
          },
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
          <p className="stats-value">583 K</p>
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
              <p className="chart-percentage">68%</p>
            </div>
          </div>
          <div className="chart-legend">
            <p>Active: 68%</p>
            <p>On Leave: 32%</p>
          </div>
        </div>

        {/* Top 10 Stores by sales */}
        <div className="stats-card">
          <h2 className="stats-card-title">Top Departments</h2>
          <ul className="list-items">
            {topStores.map((store, idx) => (
              <li key={idx} className="list-item">
                <span>{store.name}</span>
                <span className="list-value">{store.sales}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
