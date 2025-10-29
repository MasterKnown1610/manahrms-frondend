import React from "react";
import {
  Table,
  Button,
  Input,
  Tag,
  Dropdown,
  Menu,
  Pagination,
} from "antd";
import { DownOutlined, PlusOutlined } from "@ant-design/icons";
import "./EmployeeManagement.css";

const EmployeeManagement = () => {
  const data = [
    {
      key: "1",
      name: "John Doe",
      id: "EMP001",
      department: "Engineering",
      job: "Software Engineer",
      status: "Active",
      hireDate: "2023-01-15",
    },
    {
      key: "2",
      name: "Jane Smith",
      id: "EMP002",
      department: "Marketing",
      job: "Marketing Manager",
      status: "Active",
      hireDate: "2022-05-20",
    },
    {
      key: "3",
      name: "Peter Jones",
      id: "EMP003",
      department: "Sales",
      job: "Sales Representative",
      status: "On Leave",
      hireDate: "2021-11-10",
    },
    {
      key: "4",
      name: "Mary Johnson",
      id: "EMP004",
      department: "Human Resources",
      job: "HR Coordinator",
      status: "Active",
      hireDate: "2023-08-01",
    },
    {
      key: "5",
      name: "David Williams",
      id: "EMP005",
      department: "Engineering",
      job: "QA Tester",
      status: "Terminated",
      hireDate: "2020-03-12",
    },
  ];

  const columns = [
    {
      title: "Employee Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <b>{text}</b>,
    },
    { title: "Employee ID", dataIndex: "id", key: "id" },
    { title: "Department", dataIndex: "department", key: "department" },
    { title: "Job Title", dataIndex: "job", key: "job" },
    {
      title: "Employment Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        let color =
          status === "Active"
            ? "green"
            : status === "On Leave"
            ? "gold"
            : "red";
        return <Tag color={color}>{status}</Tag>;
      },
    },
    { title: "Hire Date", dataIndex: "hireDate", key: "hireDate" },
    {
      title: "Actions",
      key: "action",
      render: () => (
        <a href="#" style={{ color: "#1677ff" }}>
          View Profile
        </a>
      ),
    },
  ];

  // ✅ CSV Export Function
  const exportToCSV = () => {
    const headers = [
      "Employee Name,Employee ID,Department,Job Title,Employment Status,Hire Date\n",
    ];
    const rows = data.map(
      (emp) =>
        `${emp.name},${emp.id},${emp.department},${emp.job},${emp.status},${emp.hireDate}`
    );
    const csvContent = headers + rows.join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.setAttribute("download", "Employee_Data.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const departmentMenu = (
    <Menu>
      <Menu.Item key="1">Engineering</Menu.Item>
      <Menu.Item key="2">Marketing</Menu.Item>
      <Menu.Item key="3">HR</Menu.Item>
      <Menu.Item key="4">Sales</Menu.Item>
    </Menu>
  );

  const statusMenu = (
    <Menu>
      <Menu.Item key="1">Active</Menu.Item>
      <Menu.Item key="2">On Leave</Menu.Item>
      <Menu.Item key="3">Terminated</Menu.Item>
    </Menu>
  );

  return (
    <div className="employee-container">
      <div className="employee-header">
        <h2>Employee Management</h2>
        <div className="employee-actions">
          {/* ✅ Working Export Button */}
          <Button onClick={exportToCSV}>Export to CSV</Button>

          <Button type="primary" icon={<PlusOutlined />}>
            Add New Employee
          </Button>
        </div>
      </div>

      <div className="employee-filters">
        <Input.Search
          placeholder="Search by name, ID, or department"
          className="search-input"
        />

        <div className="filter-buttons">
          <Dropdown overlay={departmentMenu}>
            <Button>
              Filter by Department <DownOutlined />
            </Button>
          </Dropdown>

          <Dropdown overlay={statusMenu}>
            <Button>
              Filter by Status <DownOutlined />
            </Button>
          </Dropdown>
        </div>
      </div>

      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        bordered
        style={{ marginBottom: "20px" }}
      />

      {/* ✅ Pagination with Prev / Next */}
      <div className="employee-footer">
        <div>
          <Button>Bulk Actions</Button>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Button>Prev</Button>
          <Pagination current={1} total={20} pageSize={10} simple />
          <Button>Next</Button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeManagement;
