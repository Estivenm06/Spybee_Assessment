import Image from "next/image";

import { AvatarGroup } from "@/ui/common/Avatar/avatar";
import { Item } from "@/ui/table/tableComponents/items";
import { Plan } from "@/ui/table/tableComponents/Plan";
import { Status } from "@/ui/table/tableComponents/Status";

import { dateFormat, teamFormat } from "../utils/utils";

import avatar from "@/public/transparentAvatar.webp";
import { useMap } from "../states/useMap";

import styles from "./table.module.css";

const BodyTable = ({ project, mapActive }) => {
  const setCoordenates = useMap((s) => s.setCoordenates);
  const {
    users,
    title,
    lastVisit,
    lastUpdated,
    projectPlanData,
    status,
    incidents,
    position,
  } = project;
  const team = teamFormat(users);
  if (!position) return null;
  const { lat, lng } = position;

  return (
    <tr
      className={mapActive ? styles.rowMap : styles.row}
      onClick={mapActive && (() => setCoordenates([lng, lat]))}
    >
      <td className={styles.projectTitleCol}>
        <Image className={styles.dataImage} src={avatar} alt="Project_Avatar" />
        <div className={styles.dataTitleContainer}>
          <h3 className={styles.dataTitle}>{title}</h3>
          <p className={styles.dataSub}>
            {dateFormat(lastVisit)} <span>{dateFormat(lastUpdated)}</span>
          </p>
        </div>
      </td>
      <td className={styles.projectCol}>
        <Plan planName={projectPlanData.plan} />
      </td>
      <td className={styles.projectCol}>
        <Status projectStatus={status} />
      </td>
      <td className={styles.projectCol}>
        <AvatarGroup team={team} truncate />
      </td>
      <td className={styles.projectCol}>
        <ul className={styles.tableItems}>
          <Item number={incidents.length} type={"Incidencias"} />
          <Item number={incidents.length} type={"RFI"} />
          <Item number={incidents.length} type={"Tareas"} />
        </ul>
      </td>
    </tr>
  );
};

export { BodyTable };
