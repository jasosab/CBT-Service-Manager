import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../api/axios";

export default function TicketForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [ticket, setTicket] = useState({
    title: "",
    description: "",
    status: "ABIERTO",
    priority: "MEDIA",
    userId: "",
    assetId: "",
  });

  const [users, setUsers] = useState([]);
  const [assets, setAssets] = useState([]);

  const loadUsers = async () => {
    const res = await api.get("/users");
    setUsers(res.data);
  };

  const loadAssets = async () => {
    const res = await api.get("/assets");
    setAssets(res.data);
  };

  const loadTicket = async () => {
    const res = await api.get(`/tickets/${id}`);
    const t = res.data;

    setTicket({
      title: t.title || "",
      description: t.description || "",
      status: t.status || "ABIERTO",
      priority: t.priority || "MEDIA",
      userId: t.user ? t.user.id : "",
      assetId: t.asset ? t.asset.id : "",
    });
  };

  useEffect(() => {
    loadUsers();
    loadAssets();
    if (id) loadTicket();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // payload acorde al backend
    const payload = {
      title: ticket.title,
      description: ticket.description,
      status: ticket.status,
      priority: ticket.priority,
      user: ticket.userId ? { id: ticket.userId } : null,
      asset: ticket.assetId ? { id: ticket.assetId } : null,
    };

    if (id) {
      await api.put(`/tickets/${id}`, payload);
    } else {
      await api.post("/tickets", payload);
    }

    navigate("/tickets");
  };

  return (
    <div>
      <h2>{id ? "Editar Ticket" : "Nuevo Ticket"}</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Título</label>
          <input
            className="form-control"
            value={ticket.title}
            onChange={(e) =>
              setTicket({ ...ticket, title: e.target.value })
            }
          />
        </div>

        <div className="mb-3">
          <label>Descripción</label>
          <textarea
            className="form-control"
            value={ticket.description}
            onChange={(e) =>
              setTicket({ ...ticket, description: e.target.value })
            }
          />
        </div>

        <div className="mb-3">
          <label>Estado</label>
          <select
            className="form-select"
            value={ticket.status}
            onChange={(e) =>
              setTicket({ ...ticket, status: e.target.value })
            }
          >
            <option value="ABIERTO">ABIERTO</option>
            <option value="EN_PROCESO">EN_PROCESO</option>
            <option value="CERRADO">CERRADO</option>
          </select>
        </div>

        <div className="mb-3">
          <label>Prioridad</label>
          <select
            className="form-select"
            value={ticket.priority}
            onChange={(e) =>
              setTicket({ ...ticket, priority: e.target.value })
            }
          >
            <option value="BAJA">BAJA</option>
            <option value="MEDIA">MEDIA</option>
            <option value="ALTA">ALTA</option>
          </select>
        </div>

        <div className="mb-3">
          <label>Usuario (cliente / solicitante)</label>
          <select
            className="form-select"
            value={ticket.userId}
            onChange={(e) =>
              setTicket({ ...ticket, userId: e.target.value })
            }
          >
            <option value="">-- Selecciona un usuario --</option>
            {users.map((u) => (
              <option key={u.id} value={u.id}>
                {u.fullName} ({u.email})
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label>Activo asociado</label>
          <select
            className="form-select"
            value={ticket.assetId}
            onChange={(e) =>
              setTicket({ ...ticket, assetId: e.target.value })
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

        <button className="btn btn-primary">Guardar</button>
      </form>
    </div>
  );
}