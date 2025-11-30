import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios";
import Table from "../../components/Table";

export default function TicketsList() {
  const [tickets, setTickets] = useState([]);
  const navigate = useNavigate();

  const loadTickets = async () => {
    const res = await api.get("/tickets");
    setTickets(res.data);
  };

  useEffect(() => {
    loadTickets();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("¿Eliminar este ticket?")) return;
    await api.delete(`/tickets/${id}`);
    loadTickets();
  };

  return (
    <Table
      title="Tickets de Soporte"
      columns={[
        { header: "Título", field: "title" },
        { header: "Estado", field: "status" },
        {
          header: "Asignado a",
          render: (t) => t.assignedTo?.fullName || "-",
        },
      ]}
      data={tickets}
      onEdit={(row) => navigate(`/tickets/edit/${row.id}`)}
      onDelete={(row) => handleDelete(row.id)}
    />
  );
}
