import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const TheComponent = () => {
  const { theme } = useContext(ThemeContext);

  const styles = {
    padding: "20px",
    margin: "20px",
    borderRadius: "10px",
    backgroundColor: theme === "light" ? "#f9f9f9" : "#444",
    color: theme === "light" ? "#000" : "#fff",
    textAlign: "center",
    boxShadow:
      theme === "light"
        ? "0 4px 6px rgba(0,0,0,0.1)"
        : "0 4px 6px rgba(255,255,255,0.1)",
  };

  return (
    <div style={styles}>
      <h2>This is a Themed Component</h2>
      <p>Current Theme: <strong>{theme}</strong></p>
    </div>
  );
};

export default TheComponent;
