import React from "react";
import { Button } from "antd";
import * as XLSX from "xlsx";

const ExportButton = ({ data, fileName = "export.xlsx" }) => {
  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, fileName);
  };

  return (
    <Button type="primary" onClick={exportToExcel}>
      Export Excel
    </Button>
  );
};

export default ExportButton;
