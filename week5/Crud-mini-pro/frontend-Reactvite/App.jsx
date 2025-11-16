import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import AddProduct from "./components/addproduct";
import ProductList from "./components/productlist";
import UpdateProduct from "./components/modifyProduct";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div style={{ padding: 20 }}>
        <Routes>
          <Route path="/" element={<AddProduct />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="update/:id" element={<UpdateProduct/>} />
          <Route path="/list" element={<ProductList />} />

          {/* Default page */}
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
