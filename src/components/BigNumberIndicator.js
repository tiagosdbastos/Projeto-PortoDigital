import React from 'react';

const BigNumberIndicator = ({ title, value, color = "#00C49F" }) => {
  return (
    <div
      style={{
        backgroundColor: "#1e1e1e",
        borderRadius: "15px",
        padding: "20px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        textAlign: 'center',
        width: '100%',
        maxWidth: '350px',
        margin: '0 auto',
      }}
    >
      <h3 style={{ color: "#fff", fontSize: "1.2rem", margin: "10px 0" }}>{title}</h3>
      <div
        style={{
          fontSize: '60px',
          fontWeight: 'bold',
          color: color,
          margin: '20px 0',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        }}
      >
        {value}
      </div>
    </div>
  );
};

export default BigNumberIndicator;
