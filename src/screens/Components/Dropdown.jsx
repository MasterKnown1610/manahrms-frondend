import React from "react";
import "./Dropdown.css";

const Dropdown = ({ options, placeholder, value, onChange }) => {
  return (
    <select
      className="custom-dropdown"
      value={value}
      onChange={(e) => onChange && onChange(e.target.value)}
    >
      <option value="">{placeholder}</option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
