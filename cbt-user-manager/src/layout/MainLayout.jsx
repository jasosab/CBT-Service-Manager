import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "./layout.css";

export default function MainLayout({ children }) {
  return (
    <div className="app-shell">
      <Sidebar />
      <div className="app-main">
        <Navbar />
        <main className="app-content">{children}</main>
      </div>
    </div>
  );
}
