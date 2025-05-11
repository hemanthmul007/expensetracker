import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
      <Link to="/">Dashboard</Link> |{" "}
      <Link to="/add">Add</Link> |{" "}
      <Link to="/view">View</Link> |{" "}
      <Link to="/reports">Reports</Link> |{" "}
      <Link to="/settings">Settings</Link> |{" "}
      {token ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <>
          <Link to="/login">Login</Link> | <Link to="/signup">Signup</Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;
