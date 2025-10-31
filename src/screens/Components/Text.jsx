import React from "react";

const Text = ({ children, style, type = "normal" }) => {
  const styles = {
    fontWeight: type === "bold" ? "600" : "400",
    fontSize: type === "title" ? "18px" : "14px",
    margin: 0,
    ...style,
  };

  return <p style={styles}>{children}</p>;
};

export default Text;
