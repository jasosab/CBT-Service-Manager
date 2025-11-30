import { useEffect, useState } from "react";
import api from "../api/axios";
import "./dashboard.css";

import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
  CartesianGrid,
} from "recharts";

export default function Dashboard() {
  const [stats, setStats] = useState({
    users: 0,
    assets: 0,
    tickets: 0,
    maintenances: 0,
    ticketsPorMes: [],
    slaData: []
  });

  const loadStats = async () => {
    try {
      const res = await api.get("/dashboard/stats");
      setStats(res.data);
    } catch (error) {
      console.error("Error cargando stats:", error);
    }
  };

  useEffect(() => {
    loadStats();
  }, []);

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">CBT Service Manager</h1>
      <p className="dashboard-sub">
        Panel general de tickets, activos y mantenimientos.
      </p>

      {/* KPIs */}
      <div className="kpi-row">
        <div className="kpi-card">
          <h3>Tickets</h3>
          <p className="kpi-value">{stats.tickets}</p>
        </div>
        <div className="kpi-card">
          <h3>Usuarios</h3>
          <p className="kpi-value">{stats.users}</p>
        </div>
        <div className="kpi-card">
          <h3>Activos</h3>
          <p className="kpi-value">{stats.assets}</p>
        </div>
        <div className="kpi-card">
          <h3>Mantenimientos</h3>
          <p className="kpi-value">{stats.maintenances}</p>
        </div>
      </div>

      {/* Charts */}
      <div className="charts-row">
        <div className="chart-card">
          <h4>Evolución de Tickets (últimos meses)</h4>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={stats.ticketsPorMes}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="mes" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="total"
                stroke="#1f6feb"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h4>SLA por Grupo</h4>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={stats.slaData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="grupo" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sla" fill="#2ecc71" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="summary-box">
        <p>
          Este panel resume el comportamiento de los tickets de soporte,
          el cumplimiento de SLA y la carga de trabajo de los equipos de soporte
          y mantenimiento.
        </p>
      </div>
    </div>
  );
}
