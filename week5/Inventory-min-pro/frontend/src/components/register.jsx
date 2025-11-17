import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() { 
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
    role: "admin",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const res = await fetch("http://localhost:8080/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),

        // ⭐ REQUIRED for express-session
        credentials: "include",
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message);
        return;
      }

      setSuccess("Registration successful!");
      setTimeout(() => navigate("/"), 1500);

    } catch (err) {
      setError("Something went wrong");
      console.log(err);
    }
  };
  return (
    <div className="register-wrapper">
      <h2>Register</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}

      <form className="register-form" onSubmit={handleSubmit}>
        <input
          name="username"
          type="text"
          placeholder="Enter username"
          value={form.username}
          onChange={handleChange}
          required
        />

        <input
          name="password"
          type="password"
          placeholder="Enter password"
          value={form.password}
          onChange={handleChange}
          required
        />

        {/* Select role */}
        <select name="role" value={form.role} onChange={handleChange}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>

        <button type="submit">Register</button>
      </form>

      <p>
        Already have an account? <a href="/">Login</a>
      </p>
    </div>
  );
}

export default Register;
