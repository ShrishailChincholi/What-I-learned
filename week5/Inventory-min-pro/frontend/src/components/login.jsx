import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message);
        return;
      }

      localStorage.setItem("token", data.token);

      if (data.role === "admin") {
        navigate("/admin-dashboard");
      } else {
        navigate("/user-dashboard");
      }
    } catch (err) {
      setError("Something went wrong");
      console.log(err);
    }
  };

  return (
    <div className="login-wrapper">
      <h2>Login</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form className="login-form" onSubmit={handleSubmit}>
        <input
          name="username"
          type="text"
          placeholder="Enter username"
          onChange={handleChange}
          value={form.username}
          required
        />

        <input
          name="password"
          type="password"
          placeholder="Enter password"
          onChange={handleChange}
          value={form.password}
          required
        />

        <button type="submit" className="btn-login">
          Login
        </button>
      </form>

      {/* Register Button */}
      <p className="register-text">
        Don’t have an account?
        <button className="btn-register" onClick={() => navigate("/register")}>
          Register
        </button>
      </p>
    </div>
  );
}

export default Login;
