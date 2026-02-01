import React from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";

const App = () => {
  return (
    <Router>

      {/* ---------- HEADER ----------- */}
      <header
        style={{
          padding: "15px",
          background: "#f5f5f5",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>My App</h2>

        <div style={{ display: "flex", gap: "10px" }}>
          <Link to="/">
            <button>Login</button>
          </Link>
          <Link to="/signup">
            <button>Signup</button>
          </Link>
        </div>
      </header>

      {/* ---------- ROUTES ---------- */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;
