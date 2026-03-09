import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {

  return (
    <div style={{
      width: "220px",
      background: "#0f172a",
      color: "white",
      height: "calc(100vh - 60px)",
      padding: "20px"
    }}>

      <h3>Menu</h3>

      <p><Link to="/admin" style={{color:"white"}}>📊 Dashboard</Link></p>
      <p><Link to="/users" style={{color:"white"}}>👥 Users</Link></p>
      <p>📦 Products</p>
      <p>📑 Reports</p>
      <p>⚙ Settings</p>

    </div>
  );
}

export default Sidebar;