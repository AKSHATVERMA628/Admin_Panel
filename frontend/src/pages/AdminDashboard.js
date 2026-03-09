import React, { useEffect, useState } from "react";
import API from "../services/api";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function AdminDashboard() {

  const [data, setData] = useState({});

  useEffect(() => {

    API.get("/admin-data")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

  }, []);

  return (
    <div>

      <Navbar />

      <div style={{display:"flex"}}>

        <Sidebar />

        <div style={{padding:"20px",width:"100%"}}>

          <h2>Dashboard</h2>

          <h3>Welcome {data.loggedInUser}</h3>

          <div style={{display:"flex",gap:"20px",marginTop:"20px"}}>

            <div style={{
              background:"#ffffff",
              padding:"20px",
              borderRadius:"8px",
              width:"180px",
              boxShadow:"0px 2px 8px rgba(0,0,0,0.1)"
            }}>
              <h3>Users</h3>
              <p>{data.users}</p>
            </div>

            <div style={{
              background:"#ffffff",
              padding:"20px",
              borderRadius:"8px",
              width:"180px",
              boxShadow:"0px 2px 8px rgba(0,0,0,0.1)"
            }}>
              <h3>Orders</h3>
              <p>{data.orders}</p>
            </div>

            <div style={{
              background:"#ffffff",
              padding:"20px",
              borderRadius:"8px",
              width:"180px",
              boxShadow:"0px 2px 8px rgba(0,0,0,0.1)"
            }}>
              <h3>Revenue</h3>
              <p>{data.revenue}</p>
            </div>

          </div>

        </div>

      </div>

      <Footer />

    </div>
  );
}

export default AdminDashboard;