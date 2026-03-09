import React from "react";
import { logout } from "../utils/auth";

function Navbar() {

  return (
    <div style={{
      height: "60px",
      background: "#1e293b",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 20px"
    }}>

      <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          width="35"
          alt="logo"
        />
        <h3>MyCompany Admin</h3>
      </div>

      <button
        onClick={logout}
        style={{padding:"6px 12px",cursor:"pointer"}}
      >
        Logout
      </button>

    </div>
  );
}

export default Navbar;