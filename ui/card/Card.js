import { Item } from "../table/tableComponents/items";
import { AvatarGroup } from "../common/Avatar/avatar";
import { Plan } from "../table/tableComponents/Plan";
import { Status } from "../table/tableComponents/Status";

import { dateFormat, teamFormat } from "../utils/utils";

import styles from "./card.module.css";
import stylesTable from "../table/table.module.css";

export const CardComponent = ({ project }) => {
  const team = teamFormat(project.users);

  return (
    <div className={styles.singlecardContainer}>
      {/* <Image /> */}
      <div className={styles.cardHeaderProject}>
        <div className={styles.cardTitleProject}>
          <h3 className={stylesTable.dataTitle}>{project.title}</h3>
          <p className={stylesTable.dataSub}>
            {dateFormat(project.lastVisit)}{" "}
            <span>{dateFormat(project.lastUpdated)}</span>
          </p>
        </div>
        <div className={styles.cardPlan}>
          <div>
            <Plan planName={project.projectPlanData.plan} mobile />
          </div>
          <div>
            <Status projectStatus={project.status} mobile />
          </div>
        </div>
      </div>
      <div className={styles.divider} />
      <div className={styles.cardBodyProjects}>
        <AvatarGroup team={team} truncate mobile />
        <div>
          <ul className={stylesTable.tableItems}>
            <Item number={project.incidents.length} type={"Incidencias"} />
            <Item number={project.incidents.length} type={"RFI"} />
            <Item number={project.incidents.length} type={"Tareas"} />
          </ul>
        </div>
      </div>
    </div>
  );
};
