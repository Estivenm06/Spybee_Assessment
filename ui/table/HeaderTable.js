import styles from "./table.module.css"

const HeaderTable = () => {
  return (
    <thead>
      <tr className={styles.rowHeader}>
        <th scope="col" className={styles.projectTitleHead}>
          Proyecto
        </th>
        <th scope="col" className={styles.projectHead}>
          Plan
        </th>
        <th scope="col" className={styles.projectHead}>
          Estado
        </th>
        <th scope="col" className={styles.projectTeamHead}>
          Equipo
        </th>
        <th scope="col" className={styles.projectItemsHead}>
          Items por vencer
        </th>
      </tr>
    </thead>
  );
};

export { HeaderTable };
