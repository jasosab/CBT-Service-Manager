import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios";
import Table from "../../components/Table";

export default function UsersList() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const loadUsers = async () => {
    const res = await api.get("/users");
    setUsers(res.data);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("¿Seguro que deseas eliminar este usuario?")) return;
    await api.delete(`/users/${id}`);
    loadUsers();
  };

  return (
    <Table
      title="Usuarios"
      columns={[
        { header: "Nombre", field: "fullName" },
        { header: "Correo", field: "email" },
        {
          header: "Roles",
          render: (u) =>
            u.roles && Array.isArray(u.roles)
              ? u.roles.map((r) => r.name).join(", ")
              : "-",
        },
      ]}
      data={users}
      onEdit={(row) => navigate(`/users/edit/${row.id}`)}
      onDelete={(row) => handleDelete(row.id)}
    />
  );
}
