import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../api/axios";

export default function MaintenanceForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [maintenance, setMaintenance] = useState({
    description: "",
    type: "PREVENTIVO",
    status: "PROGRAMADO",
    date: "",
    assetId: "",
    technicianId: "",
  });

  const [assets, setAssets] = useState([]);
  const [users, setUsers] = useState([]);

  const loadAssets = async () => {
    const res = await api.get("/assets");
    setAssets(res.data);
  };

  const loadUsers = async () => {
    const res = await api.get("/users");
    setUsers(res.data);
  };

  const loadRecord = async () => {
    const res = await api.get(`/maintenance/${id}`);
    const m = res.data;

    setMaintenance({
      description: m.description || "",
      type: m.type || "PREVENTIVO",
      status: m.status || "PROGRAMADO",
      date: m.date || "",
      assetId: m.asset ? m.asset.id : "",
      technicianId: m.technician ? m.technician.id : "",
    });
  };

  useEffect(() => {
    loadAssets();
    loadUsers();
    if (id) loadRecord();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      description: maintenance.description,
      type: maintenance.type,
      status: maintenance.status,
      date: maintenance.date,
      asset: maintenance.assetId ? { id: maintenance.assetId } : null,
      technician: maintenance.technicianId
        ? { id: maintenance.technicianId }
        : null,
    };

    if (id) {
      await api.put(`/maintenance/${id}`, payload);
    } else {
      await api.post("/maintenance", payload);
    }

    navigate("/maintenance");
  };


  const technicians = users.filter((u) => {
    // si user.roles es un array de roles con { name: 'TECHNICIAN' }
    if (u.roles && Array.isArray(u.roles)) {
      return u.roles.some((r) => r.name === "TECHNICIAN");
    }
    // si no tienes roles, devuelves todos:
    return true;
  });

  return (
    <div>
      <h2>{id ? "Editar Mantenimiento" : "Nuevo Mantenimiento"}</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Descripción</label>
          <textarea
            className="form-control"
            value={maintenance.description}
            onChange={(e) =>
              setMaintenance({ ...maintenance, description: e.target.value })
            }
          />
        </div>

        <div className="mb-3">
          <label>Tipo</label>
          <select
            className="form-select"
            value={maintenance.type}
            onChange={(e) =>
              setMaintenance({ ...maintenance, type: e.target.value })
            }
          >
            <option value="PREVENTIVO">PREVENTIVO</option>
            <option value="CORRECTIVO">CORRECTIVO</option>
          </select>
        </div>

        <div className="mb-3">
          <label>Estado</label>
          <select
            className="form-select"
            value={maintenance.status}
            onChange={(e) =>
              setMaintenance({ ...maintenance, status: e.target.value })
            }
          >
            <option value="PROGRAMADO">PROGRAMADO</option>
            <option value="EN_EJECUCION">EN_EJECUCION</option>
            <option value="FINALIZADO">FINALIZADO</option>
          </select>
        </div>

        <div className="mb-3">
          <label>Fecha</label>
          <input
            type="date"
            className="form-control"
            value={maintenance.date}
            onChange={(e) =>
              setMaintenance({ ...maintenance, date: e.target.value })
            }
          />
        </div>

        <div className="mb-3">
          <label>Activo</label>
          <select
            className="form-select"
            value={maintenance.assetId}
            onChange={(e) =>
              setMaintenance({ ...maintenance, assetId: e.target.value })
            }
          >
            <option value="">-- Selecciona un activo --</option>
            {assets.map((a) => (
              <option key={a.id} value={a.id}>
                {a.name} - {a.serialNumber}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label>Técnico asignado</label>
          <select
            className="form-select"
            value={maintenance.technicianId}
            onChange={(e) =>
              setMaintenance({
                ...maintenance,
                technicianId: e.target.value,
              })
            }
          >
            <option value="">-- Selecciona un técnico --</option>
            {technicians.map((t) => (
              <option key={t.id} value={t.id}>
                {t.fullName} ({t.email})
              </option>
            ))}
          </select>
        </div>

        <button className="btn btn-primary">Guardar</button>
      </form>
    </div>
  );
}