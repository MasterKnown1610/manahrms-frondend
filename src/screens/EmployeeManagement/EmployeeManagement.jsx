import React, { useState, useMemo } from "react";
import {
  Table,
  Tag,
  Input,
  Button,
  Select,
  Space,
  Upload,
  message,
  Pagination,
} from "antd";
import {
  SearchOutlined,
  UploadOutlined,
  DownloadOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import * as XLSX from "xlsx";
import "./EmployeeManagement.css";

const { Option } = Select;

const initialData = [
  {
    key: "1",
    name: "Karthikeya",
    id: "EMP001",
    department: "Engineering",
    title: "Software Engineer",
    status: "Active",
    hireDate: "2023-01-15",
  },
  {
    key: "2",
    name: "Umesh",
    id: "EMP002",
    department: "Marketing",
    title: "Marketing Manager",
    status: "Active",
    hireDate: "2022-05-20",
  },
  {
    key: "3",
    name: "Manashwini",
    id: "EMP003",
    department: "Sales",
    title: "Sales Representative",
    status: "On Leave",
    hireDate: "2021-11-10",
  },
  {
    key: "4",
    name: "Kalpana",
    id: "EMP004",
    department: "Human Resources",
    title: "HR Coordinator",
    status: "Active",
    hireDate: "2023-08-01",
  },
  {
    key: "5",
    name: "Srija",
    id: "EMP005",
    department: "Engineering",
    title: "QA Tester",
    status: "Terminated",
    hireDate: "2020-03-12",
  },
];

export default function EmployeeManagement() {
  const [data, setData] = useState(initialData);
  const [search, setSearch] = useState("");
  const [deptFilter, setDeptFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [page, setPage] = useState(1);
  const pageSize = 5;

  // import handler (CSV/XLSX)
  const handleFile = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const workbook = XLSX.read(e.target.result, { type: "binary" });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const imported = XLSX.utils.sheet_to_json(sheet, { defval: "" });

        // Normalize field keys (case-insensitive mapping)
        const formatted = imported.map((r, i) => ({
          key: `i-${i}`,
          name: r.name || r.Name || r["Employee Name"] || "",
          id: r.id || r.ID || r["Employee ID"] || "",
          department:
            r.department || r.Department || r["Department"] || "",
          title: r.title || r.Title || r["Job Title"] || "",
          status: r.status || r.Status || r["Employment Status"] || "Active",
          hireDate: r.hireDate || r["Hire Date"] || "",
        }));

        setData(formatted);
        message.success(`${file.name} imported`);
      } catch (err) {
        console.error(err);
        message.error("Failed to parse file");
      }
    };
    reader.readAsBinaryString(file);
    return false; // prevent upload
  };

  // export handler
  const handleExport = () => {
    if (!data.length) {
      message.warning("No data to export");
      return;
    }
    const worksheet = XLSX.utils.json_to_sheet(
      data.map(({ key, ...rest }) => rest)
    );
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Employees");
    XLSX.writeFile(workbook, "EmployeeRecords.xlsx");
    message.success("Exported EmployeeRecords.xlsx");
  };

  // download sample CSV
  const handleSample = () => {
    const sample = initialData;
    const worksheet = XLSX.utils.json_to_sheet(sample);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sample");
    XLSX.writeFile(workbook, "Sample_Employee_Format.xlsx");
  };

  // filtered + searched data
  const filtered = useMemo(() => {
    return data
      .filter((r) =>
        [r.name, r.id, r.department, r.title]
          .join(" ")
          .toLowerCase()
          .includes(search.trim().toLowerCase())
      )
      .filter((r) => (deptFilter ? r.department === deptFilter : true))
      .filter((r) => (statusFilter ? r.status === statusFilter : true));
  }, [data, search, deptFilter, statusFilter]);

  const pageData = filtered.slice((page - 1) * pageSize, page * pageSize);

  const columns = [
    {
      title: "EMPLOYEE NAME",
      dataIndex: "name",
      key: "name",
      render: (t) => <span className="emp-name">{t}</span>,
    },
    { title: "EMPLOYEE ID", dataIndex: "id", key: "id" },
    { title: "DEPARTMENT", dataIndex: "department", key: "department" },
    { title: "JOB TITLE", dataIndex: "title", key: "title" },
    {
      title: "EMPLOYMENT STATUS",
      dataIndex: "status",
      key: "status",
      render: (s) => {
        const color = s === "Active" ? "green" : s === "On Leave" ? "orange" : "red";
        return (
          <Tag color={color} className="status-tag">
            {s}
          </Tag>
        );
      },
    },
    { title: "HIRE DATE", dataIndex: "hireDate", key: "hireDate" },
    {
      title: "ACTIONS",
      key: "actions",
      render: (_, row) => (
        <a className="view-link" onClick={() => message.info(`View ${row.name}`)}>
          View Profile
        </a>
      ),
    },
  ];

  return (
    <div className="emp-wrapper">
      {/* top boxed toolbar */}
      <div className="emp-header-box">
        <div className="emp-title">Employee Management</div>

        <div className="emp-actions">
          <Upload beforeUpload={handleFile} showUploadList={false}>
            <Button className="btn-outline" icon={<UploadOutlined />}>
              Import CSV
            </Button>
          </Upload>

          <Button className="btn-outline" icon={<DownloadOutlined />} onClick={handleExport}>
            Export CSV
          </Button>

          <Button className="btn-primary" icon={<PlusOutlined />}>
            Add New Employee
          </Button>
        </div>

        <div className="emp-filter-row">
          <Input
            prefix={<SearchOutlined />}
            placeholder="Search by name, ID, or department"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            className="emp-search"
          />

          <div className="emp-filters">
            <Select
              placeholder="Filter by Department"
              allowClear
              style={{ width: 180 }}
              value={deptFilter || undefined}
              onChange={(v) => {
                setDeptFilter(v || "");
                setPage(1);
              }}
            >
              {/* departments pulled from data */}
              {[...new Set(data.map((d) => d.department))].map((d) => (
                <Option key={d} value={d}>
                  {d}
                </Option>
              ))}
            </Select>

            <Select
              placeholder="Filter by Status"
              allowClear
              style={{ width: 180 }}
              value={statusFilter || undefined}
              onChange={(v) => {
                setStatusFilter(v || "");
                setPage(1);
              }}
            >
              <Option value="Active">Active</Option>
              <Option value="On Leave">On Leave</Option>
              <Option value="Terminated">Terminated</Option>
            </Select>
          </div>
        </div>
      </div>

      {/* table card */}
      <div className="emp-table-card">
        <Table
          columns={columns}
          dataSource={pageData}
          pagination={false}
          bordered
          rowKey="key"
        />

        <div className="emp-footer-row">
          <Button className="btn-outline">Bulk Actions</Button>

          <div className="paging-area">
            <div className="showing">Showing {(page - 1) * pageSize + 1} to {Math.min(page * pageSize, filtered.length)} of {filtered.length} results</div>

            <Pagination
              current={page}
              pageSize={pageSize}
              total={filtered.length}
              showSizeChanger={false}
              onChange={(p) => setPage(p)}
              simple={false}
              showQuickJumper={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
