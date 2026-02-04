export const Table = ({ projects }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th scope="col">Proyecto</th>
            <th scope="col">Plan</th>
            <th scope="col">Estado</th>
            <th scope="col">Equipo</th>
            <th scope="col">Items por vencer</th>
          </tr>
        </thead>
        <tbody>
          <tr className="item">
            <td>Nombre del proyecto</td>
            <td>Pequeño</td>
            <td>Activo</td>
            <td>Lot of persons</td>
            <td>
              <ul className="tableUL">
                <li>45 Incidencias</li>
                <li>45 RFI</li>
                <li>45 Tareas</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
