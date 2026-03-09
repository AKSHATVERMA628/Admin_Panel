import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Users() {

  return (
    <div>

      <Navbar />

      <div style={{display:"flex"}}>

        <Sidebar />

        <div style={{padding:"20px"}}>

          <h2>User Management</h2>

          <p>Here you can manage users.</p>

        </div>

      </div>

    </div>
  );
}

export default Users;