import React, { useState } from "react";
import { Table, Upload, Button, message, Space, Input, Tag } from "antd";
import {
  UploadOutlined,
  DownloadOutlined,
  PlusOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import * as XLSX from "xlsx";
import "./Table.css";

const CustomTable = ({ columns, data, pagination = true }) => {
  const [tableData, setTableData] = useState(data || []);
  const [searchText, setSearchText] = useState("");

  // Upload CSV
  const handleUpload = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const workbook = XLSX.read(e.target.result, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parsedData = XLSX.utils.sheet_to_json(sheet, { defval: "" });
      setTableData(parsedData);
      message.success(`${file.name} uploaded successfully`);
    };
    reader.readAsBinaryString(file);
    return false;
  };

  // Export CSV
  const handleExport = () => {
    const worksheet = XLSX.utils.json_to_sheet(tableData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Employees");
    XLSX.writeFile(workbook, "EmployeeData.xlsx");
  };

  // Search
  const filteredData = tableData.filter((item) =>
    Object.values(item).some((val) =>
      String(val).toLowerCase().includes(searchText.toLowerCase())
    )
  );

  // Define table columns with colored status
  const tableColumns =
    columns ||
    [
      {
        title: "EMPLOYEE NAME",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "EMPLOYEE ID",
        dataIndex: "id",
        key: "id",
      },
      {
        title: "DEPARTMENT",
        dataIndex: "department",
        key: "department",
      },
      {
        title: "JOB TITLE",
        dataIndex: "title",
        key: "title",
      },
      {
        title: "EMPLOYMENT STATUS",
        dataIndex: "status",
        key: "status",
        render: (status) => {
          let color =
            status === "Active"
              ? "green"
              : status === "On Leave"
              ? "orange"
              : "red";
          return (
            <Tag color={color} className="status-tag">
              {status}
            </Tag>
          );
        },
      },
      {
        title: "HIRE DATE",
        dataIndex: "hireDate",
        key: "hireDate",
      },
      {
        title: "ACTIONS",
        dataIndex: "actions",
        key: "actions",
        render: () => (
          <Button type="link" className="view-profile">
            View Profile
          </Button>
        ),
      },
    ];

  return (
    <div style={{ marginTop: 20 }}>
      {/* 🔷 Rectangular Header */}
      <div className="header-box">
        <div className="header-top">
          <h2>Employee Management</h2>

          <Space>
            <Upload beforeUpload={handleUpload} showUploadList={false}>
              <Button className="import-btn" icon={<UploadOutlined />}>
                Import CSV
              </Button>
            </Upload>

            <Button
              className="export-btn"
              icon={<DownloadOutlined />}
              onClick={handleExport}
            >
              Export CSV
            </Button>

            <Button type="primary" className="add-btn" icon={<PlusOutlined />}>
              Add New Employee
            </Button>
          </Space>
        </div>

        <div className="header-search">
          <Input
            placeholder="Search by name, ID, or department"
            prefix={<SearchOutlined />}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
      </div>

      {/* 🧾 Table */}
      <Table
        columns={tableColumns}
        dataSource={filteredData.map((item, index) => ({ key: index, ...item }))}
        pagination={pagination}
        bordered
        className="custom-table"
      />
    </div>
  );
};

export default CustomTable;
