import React from "react";
import "./FileUpload.css";

const FileUpload = ({ onFileSelect }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && onFileSelect) onFileSelect(file);
  };

  return (
    <div className="file-upload">
      <label htmlFor="fileInput" className="file-label">
        Upload Excel/CSV
      </label>
      <input
        id="fileInput"
        type="file"
        accept=".xlsx,.csv"
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
    </div>
  );
};

export default FileUpload;
