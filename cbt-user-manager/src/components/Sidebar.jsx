import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <span className="logo-circle">CBT</span>
        <span className="logo-text">Service Manager</span>
      </div>

      <nav className="sidebar-menu">
        <Link to="/">Dashboard</Link>
        <Link to="/users">Usuarios</Link>
        <Link to="/assets">Activos</Link>
        <Link to="/tickets">Tickets</Link>
        <Link to="/maintenance">Mantenimiento</Link>
      </nav>
    </aside>
  );
}
