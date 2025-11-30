export default function Table({
  title = "",
  columns = [],
  data = [],
  onEdit = null,
  onDelete = null,
  onCreate = null,
  loading = false,
}) {
  return (
    <div className="card shadow-sm mb-4">
      {(title || onCreate) && (
        <div className="card-header d-flex justify-content-between align-items-center bg-dark text-white">
          <h5 className="mb-0">{title}</h5>

          {onCreate && (
            <button className="btn btn-success btn-sm" onClick={onCreate}>
              + Agregar
            </button>
          )}
        </div>
      )}

      {/* Loader opcional */}
      {loading ? (
        <div className="p-4 text-center">
          <div className="spinner-border text-primary" role="status"></div>
          <p className="mt-2">Cargando...</p>
        </div>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped table-hover align-middle mb-0">
            <thead className="table-dark">
              <tr>
                {columns.map((col) => (
                  <th key={col.field || col.header}>{col.header}</th>
                ))}

                {(onEdit || onDelete) && <th style={{ width: "150px" }}>Acciones</th>}
              </tr>
            </thead>

            <tbody>
              {data.length === 0 ? (
                <tr>
                  <td
                    colSpan={columns.length + (onEdit || onDelete ? 1 : 0)}
                    className="text-center py-3"
                  >
                    No hay datos disponibles
                  </td>
                </tr>
              ) : (
                data.map((row, idx) => (
                  <tr key={row.id || idx}>
                    {columns.map((col) => (
                      <td key={col.field || col.header}>
                        {col.render ? col.render(row) : row[col.field]}
                      </td>
                    ))}

                    {(onEdit || onDelete) && (
                      <td>
                        {onEdit && (
                          <button
                            className="btn btn-warning btn-sm me-2"
                            onClick={() => onEdit(row)}
                          >
                            Editar
                          </button>
                        )}

                        {onDelete && (
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => onDelete(row)}
                          >
                            Eliminar
                          </button>
                        )}
                      </td>
                    )}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
