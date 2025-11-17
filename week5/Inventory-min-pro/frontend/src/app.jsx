import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Register from "./components/register";
import UserDashboard from "./components/user-dashboard";
import AdminDashboard from "./components/admin-dashboard";
import "./style/login.regis.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;