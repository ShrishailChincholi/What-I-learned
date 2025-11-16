import { Link } from "react-router-dom";


function Navbar() {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">CRUD- APP</h2>

      <Link className="side-link" to="/add">Add Product</Link>
      <Link className="side-link" to="/list">Product List</Link>
      <Link className="side-link" to="/update">UpdateList</Link>
    </div>
  );
}

export default Navbar;
