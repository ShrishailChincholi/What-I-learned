import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Inventory-App</h2>

      {/* Admin Navigation */}
      <Link className="side-link" to="/admin-dashboard/add">
        Add Product
      </Link>

      <Link className="side-link" to="/admin-dashboard/list">
        Product List
      </Link>

      {/* Update should be accessed from list, not directly */}
      <Link className="side-link" to="/admin-dashboard/update">
        Update Product
      </Link>
    </div>
  );
}

export default Navbar;
            