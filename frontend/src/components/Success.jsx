import React from "react";
import { useNavigate } from "react-router-dom";
export default function Success() {
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      backgroundColor: "#f0f0f0",
      fontFamily: "Arial, sans-serif",
    },
    card: {
      backgroundColor: "white",
      borderRadius: "8px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      padding: "2rem",
      width: "100%",
      maxWidth: "400px",
      textAlign: "center",
    },
    title: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      marginBottom: "1rem",
      color: "#333",
    },
    icon: {
      width: "64px",
      height: "64px",
      margin: "0 auto 1rem",
      color: "#28a745", // Green color for success
    },
    message: {
      fontSize: "1rem",
      color: "#666",
      marginBottom: "1.5rem",
    },
    button: {
      backgroundColor: "#28a745",
      color: "white",
      border: "none",
      borderRadius: "4px",
      padding: "0.5rem 1rem",
      fontSize: "1rem",
      cursor: "pointer",
      transition: "background-color 0.3s",
    },
  };

  const navigate = useNavigate();

  const handleReturnToDashboard = () => {
    navigate("/Homepage");
  };

  return (
    <div style={styles.container}>
      <main style={styles.card}>
        <h1 style={styles.title}>Transaction Complete</h1>
        <svg
          style={styles.icon}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
        <p style={styles.message}>
          Your transaction has been successfully completed. Thank you for your
          purchase!
        </p>
        <button style={styles.button} onClick={handleReturnToDashboard}>
          Return to HomePage
        </button>
      </main>
    </div>
  );
}
