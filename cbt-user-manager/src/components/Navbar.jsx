import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);

  if (!user) return null;

  return (
    <nav style={{ padding: "20px", background: "#eee" }}>
      <Link to="/">Dashboard</Link> |{" "}
      <Link to="/users">Usuarios</Link> |{" "}
      <Link to="/assets">Activos</Link> |{" "}
      <Link to="/tickets">Tickets</Link> |{" "}
      <Link to="/maintenance">Mantenimiento</Link>
      <button style={{ float: "right" }} onClick={logout}>
        Cerrar sesión
      </button>
    </nav>
  );
}