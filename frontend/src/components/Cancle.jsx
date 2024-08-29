import React from "react";
// import { useNavigate } from "react-router-dom";

export default function Cancle() {
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
    },
    message: {
      fontSize: "1rem",
      color: "#666",
      marginBottom: "1.5rem",
    },
    button: {
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
      borderRadius: "4px",
      padding: "0.5rem 1rem",
      fontSize: "1rem",
      cursor: "pointer",
      transition: "background-color 0.3s",
    },
  };

  //   const navigate = useNavigate();
  //   const handleReturnToDashboard = () => {
  //     navigate("/Homepage");
  //   };

  return (
    <div style={styles.container}>
      <main style={styles.card}>
        <h1 style={styles.title}>Transaction Canceled</h1>
        <svg
          style={styles.icon}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="15" y1="9" x2="9" y2="15" />
          <line x1="9" y1="9" x2="15" y2="15" />
        </svg>
        <p style={styles.message}>
          Your transaction has been canceled. No charges have been made to your
          account.
        </p>
        <button style={styles.button} onClick={handleReturnToDashboard}>
          Return to Dashboard
        </button>
      </main>
    </div>
  );
}
