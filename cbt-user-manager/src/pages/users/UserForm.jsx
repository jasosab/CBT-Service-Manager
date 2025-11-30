import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../api/axios";


export default function UserForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    role: ""
  });

  const loadUser = async () => {
    const res = await api.get(`/users/${id}`);
    setUser(res.data);
  };

  useEffect(() => {
    if (id) loadUser();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (id) {
      await api.put(`/users/${id}`, user);
    } else {
      await api.post("/users", user);
    }

    navigate("/users");
  };

  return (
    <div>
      <h2>{id ? "Editar Usuario" : "Nuevo Usuario"}</h2>

      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" placeholder="Nombre"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />

        <input className="form-control mb-2" placeholder="Email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />

        <input className="form-control mb-2" placeholder="Rol"
          value={user.role}
          onChange={(e) => setUser({ ...user, role: e.target.value })}
        />

        <button className="btn btn-primary">Guardar</button>
      </form>
    </div>
  );
}