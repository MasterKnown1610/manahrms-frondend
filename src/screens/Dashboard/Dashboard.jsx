import React from "react";
import { FaUser, FaBell, FaMoon } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { BiCube, BiCart, BiStock } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";

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
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-[#2F4F6F] text-white flex flex-col">
        <div className="flex flex-col items-center p-6">
          <div className="w-20 h-20 rounded-full bg-[#B0C4DE] flex items-center justify-center mb-2">
            <FaUser size={40} color="#2F4F6F" />
          </div>
          <h2 className="text-lg font-semibold">Raji Umesh</h2>
          <p className="text-sm">umeshhneg789@gmail.com</p>
        </div>
        <nav className="flex-1 mt-4">
          {[
            "Dashboard",
            "Employee Management",
            "Recruitment",
            "Reports",
            "Leave Management",
            "Settings",
          ].map((item) => (
            <a
              key={item}
              href="#"
              className="block px-6 py-3 hover:bg-[#3E5E7A] transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>
        <button className="p-4 border-t border-gray-600 hover:bg-[#3E5E7A] transition-colors">
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-[#2F4F6F]">HRMS</h1>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search"
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none"
            />
            <FaMoon className="text-gray-500 cursor-pointer" />
            <FaBell className="text-gray-500 cursor-pointer" />
          </div>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          {[
            { icon: BiCube, label: "Total Products", value: 5483 },
            { icon: BiCart, label: "Orders", value: 2859 },
            { icon: BiStock, label: "Total Stock", value: 5483 },
            { icon: AiOutlineShoppingCart, label: "Out of Stock", value: 38, highlight: true },
          ].map((card, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-lg ${
                card.highlight ? "bg-[#FFF3E0] border border-orange-300" : "bg-white"
              } shadow`}
            >
              <card.icon className="text-gray-500 text-2xl mb-2" />
              <h2 className="text-2xl font-bold">{card.value}</h2>
              <p className="text-gray-500">{card.label}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-4">
          {/* Total Users */}
          <div className="bg-white p-4 rounded-lg shadow flex flex-col items-center">
            <FiUsers className="text-gray-500 text-4xl mb-2" />
            <p className="text-2xl font-bold">583 K</p>
            <p className="text-gray-500">Total Customers</p>
          </div>

          {/* Inventory Values */}
          <div className="bg-white p-4 rounded-lg shadow flex flex-col items-center">
            <div className="relative w-32 h-32">
              <svg viewBox="0 0 36 36" className="w-full h-full">
                <path
                  className="text-gray-200"
                  strokeWidth="3.8"
                  fill="none"
                  stroke="#E5E7EB"
                  d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="text-blue-500"
                  strokeWidth="3.8"
                  fill="none"
                  stroke="#2F4F6F"
                  strokeDasharray="68, 100"
                  d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <p className="text-2xl font-bold">68%</p>
              </div>
            </div>
            <div className="mt-2 text-gray-500 text-sm">
              <p>Sold units: 32%</p>
              <p>Total units: 68%</p>
            </div>
          </div>

          {/* Top 10 Stores by sales */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-gray-700 font-semibold mb-2">Top 10 Stores by sales</h2>
            <ul>
              {topStores.map((store, idx) => (
                <li
                  key={idx}
                  className="flex justify-between border-b border-gray-200 py-1 text-gray-600"
                >
                  <span>{store.name}</span>
                  <span>{store.sales}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
