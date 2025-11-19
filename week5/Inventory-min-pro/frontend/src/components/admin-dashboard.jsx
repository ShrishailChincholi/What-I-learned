import Navbar from "./navbar";
import { Outlet } from "react-router-dom";

function AdminDashboard() {
  return (
    <div style={{ display: "flex" }}>

      {/* Sidebar */}
      <Navbar />

      {/* Right section where pages load */}
      <div style={{ flex: 1, padding: "20px" }}>
        <Outlet />   {/* 👈 IMPORTANT */}
      </div>

    </div>
  );
}

export default AdminDashboard;