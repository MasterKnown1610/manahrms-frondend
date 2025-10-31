import React from "react";
import "./Button.css";

const Button = ({ label, onClick, type = "default" }) => {
  return (
    <button className={`custom-btn ${type}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
