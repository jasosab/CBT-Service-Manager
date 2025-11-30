import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../api/axios";

export default function AssetForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [asset, setAsset] = useState({
    assetName: "",
    serialNumber: "",
    category: "",
    location: "",
    active: true,
  });

  const load = async () => {
    const res = await api.get(`/assets/${id}`);
    setAsset(res.data);
  };

  useEffect(() => {
    if (id) load();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (id) {
      await api.put(`/assets/${id}`, asset);
    } else {
      await api.post("/assets", asset);
    }

    navigate("/assets");
  };

  return (
    <div>
      <h2>{id ? "Editar Activo" : "Nuevo Activo"}</h2>

      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" placeholder="Nombre"
          value={asset.assetName}
          onChange={(e) => setAsset({ ...asset, assetName: e.target.value })}
        />

        <input className="form-control mb-2" placeholder="Serial"
          value={asset.serialNumber}
          onChange={(e) => setAsset({ ...asset, serialNumber: e.target.value })}
        />

        <input className="form-control mb-2" placeholder="Categoría"
          value={asset.category}
          onChange={(e) => setAsset({ ...asset, category: e.target.value })}
        />

        <input className="form-control mb-2" placeholder="Ubicación"
          value={asset.location}
          onChange={(e) => setAsset({ ...asset, location: e.target.value })}
        />

        <button className="btn btn-primary">Guardar</button>
      </form>
    </div>
  );
}