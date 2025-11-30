import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios";
import Table from "../../components/Table";

export default function AssetsList() {
  const [assets, setAssets] = useState([]);
  const navigate = useNavigate();

  const loadAssets = async () => {
    const res = await api.get("/assets");
    setAssets(res.data);
  };

  useEffect(() => {
    loadAssets();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("¿Eliminar este activo?")) return;
    await api.delete(`/assets/${id}`);
    loadAssets();
  };

  return (
    <Table
      title="Activos Tecnológicos"
      columns={[
        { header: "Nombre", field: "name" },
        { header: "Serial", field: "serialNumber" },
        {
          header: "Estado",
          render: (a) => (
            <span
              className={
                "badge " + (a.status === "OK" ? "bg-success" : "bg-danger")
              }
            >
              {a.status}
            </span>
          ),
        },
      ]}
      data={assets}
      onEdit={(row) => navigate(`/assets/edit/${row.id}`)}
      onDelete={(row) => handleDelete(row.id)}
    />
  );
}
