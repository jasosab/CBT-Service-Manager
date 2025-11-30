import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios";
import Table from "../../components/Table";

export default function MaintenanceList() {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  const loadData = async () => {
    const res = await api.get("/maintenance");
    setItems(res.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("¿Eliminar este registro de mantenimiento?")) return;
    await api.delete(`/maintenance/${id}`);
    loadData();
  };

  return (
    <Table
      title="Mantenimientos"
      columns={[
        { header: "Descripción", field: "description" },
        { header: "Tipo", field: "type" },
        { header: "Estado", field: "status" },
        {
          header: "Activo",
          render: (m) => m.asset?.name || "-",
        },
        {
          header: "Técnico",
          render: (m) => m.technician?.fullName || "-",
        },
      ]}
      data={items}
      onEdit={(row) => navigate(`/maintenance/edit/${row.id}`)}
      onDelete={(row) => handleDelete(row.id)}
    />
  );
}
