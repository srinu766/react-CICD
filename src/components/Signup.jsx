import React, { useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f4f4f4",
  };

  const boxStyle = {
    padding: "30px",
    width: "340px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    margin: "10px 0",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "16px",
  };

  const buttonStyle = {
    width: "100%",
    padding: "12px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
    marginTop: "10px",
  };

  const headingStyle = {
    textAlign: "center",
    marginBottom: "20px",
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPass) {
      alert("Passwords do not match!");
      return;
    }

    alert(`Name: ${name}\nEmail: ${email}`);
  };

  return (
    <div style={containerStyle}>
      <form style={boxStyle} onSubmit={handleSubmit}>
        <h2 style={headingStyle}>Signup</h2>

        <input
          type="text"
          style={inputStyle}
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          style={inputStyle}
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          style={inputStyle}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <input
          type="password"
          style={inputStyle}
          placeholder="Confirm Password"
          value={confirmPass}
          onChange={(e) => setConfirmPass(e.target.value)}
          required
        />

        <button type="submit" style={buttonStyle}>
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
