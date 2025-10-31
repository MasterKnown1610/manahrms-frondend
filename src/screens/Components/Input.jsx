import React from "react";
import "./Input.css";

const Input = ({ placeholder, value, onChange, type = "text" }) => {
  return (
    <input
      className="custom-input"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      type={type}
    />
  );
};

export default Input;
