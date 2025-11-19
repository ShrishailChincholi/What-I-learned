import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Register from "./components/register";
import UserDashboard from "./components/user-dashboard";
import AdminDashboard from "./components/admin-dashboard";
import AddProduct from "./components/addproduct";
import UpdateProduct from "./components/modifiyproduct";
import ProductList from "./components/productlist";
import "./style/login.regis.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />

        {/* Admin layout route */}
        <Route path="/admin-dashboard" element={<AdminDashboard />}>
          <Route path="add" element={<AddProduct />} />
          <Route path="update/:id" element={<UpdateProduct />} />
          <Route path="list" element={<ProductList />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;