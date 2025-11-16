import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
// import "../styles/update.css";

function UpdateProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    quantity: "",
    price: ""
  });

  // Fetch single product
  const fetchProduct = async () => {
    const res = await fetch(`http://localhost:5000/api/pro/${id}`);
    const data = await res.json();
    setForm(data);
  };

  useEffect(() => {
    fetchProduct();
  },[]);

  // Handle input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Update product
  const handleUpdate = async (e) => {
    e.preventDefault();

    await fetch(`http://localhost:5000/api/pro/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    alert("Product Updated!");
    navigate("/list");
  };

  return (
    <div className="update-container">
      <h2>Update Product</h2>

      <form onSubmit={handleUpdate} className="update-form">
        <input name="name" value={form.name} onChange={handleChange} />

        <input name="quantity" value={form.quantity} onChange={handleChange} />

        <input name="price" value={form.price} onChange={handleChange} />

        <button type="submit" className="update-btn">Update</button>
      </form>
    </div>
  );
}

export default UpdateProduct;
