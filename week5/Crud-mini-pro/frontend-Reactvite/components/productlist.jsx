import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import "../styles/productlist.css";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState(""); // SEARCH STATE
  const navigate = useNavigate();

  // Fetch products
  const fetchProducts = async () => {
    const res = await fetch("http://localhost:5000/api/pro");
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Delete product
  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this product?");
    if (!confirm) return;

    await fetch(`http://localhost:5000/api/pro/${id}`, {
      method: "DELETE",
    });
    fetchProducts(); // Refresh list
  };

  // Navigate to update page
  const handleUpdate = (id) => {
    navigate(`/update/${id}`);
  };

  // Filtered Products
  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="product-page">
      <div className="product-container">
        <h2 className="product-title">All Products</h2>

        {/* SEARCH BAR */}
        <input
          type="text"
          placeholder="Search by product name..."
          className="search-box"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <table className="product-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredProducts.map((p) => (
              <tr key={p._id}>
                <td>{p.name}</td>
                <td>{p.quantity}</td>
                <td>{p.price}</td>
                <td>
                  <button
                    className="btn update-btn"
                    onClick={() => handleUpdate(p._id)}
                  >
                    Update
                  </button>
                  <button
                    className="btn delete-btn"
                    onClick={() => handleDelete(p._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {filteredProducts.length === 0 && (
              <tr>
                <td colSpan="4" style={{ textAlign: "center", padding: "20px" }}>
                  No matching products found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductList;


