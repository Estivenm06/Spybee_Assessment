const HeaderTable = () => {
  return (
    <thead>
      <tr className="rowHeader">
        <th scope="col" className="projectTitleHead">
          Proyecto
        </th>
        <th scope="col" className="projectHead">
          Plan
        </th>
        <th scope="col" className="projectHead">
          Estado
        </th>
        <th scope="col" className="projectTeamHead">
          Equipo
        </th>
        <th scope="col" className="projectItemsHead">
          Items por vencer
        </th>
      </tr>
    </thead>
  );
};

export { HeaderTable };
