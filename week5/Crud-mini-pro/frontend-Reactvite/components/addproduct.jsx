import { useState } from "react";

function AddProduct() {
  const [form, setForm] = useState({
    name: "",
    quantity: "",
    price: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/pro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const data = await res.json();
      console.log("Response:", data);
      alert("Product saved!");

      // Clear form
      setForm({ name: "", quantity: "", price: "" });

    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong");
    }
  };

 return (
  <div className="addproduct-page">
    <div className="form-container">
      <h2 className="form-title">Add Product</h2>

      <form onSubmit={handleSubmit} className="product-form">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={form.name}
          onChange={handleChange}
          className="input-box"
        />

        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={form.quantity}
          onChange={handleChange}
          className="input-box"
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          className="input-box"
        />

        <button type="submit" className="submit-btn">
          Save Product
        </button>
      </form>
    </div>
  </div>
);

}
export default AddProduct;
