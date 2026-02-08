import Image from "next/image";

import ClockIcon from "@/public/clock.svg";

import { AvatarGroup } from "../common/Avatar/avatar";

const team = ["JC", "AM", "SJ"];

import styles from "./summary.module.css";

const RowTable = ({ events }) => {
  return (
    <tr className={styles.dividerTableSummary}>
      <td className={styles.tableText}>
        <div className={styles.tableFirstCol}>
          <p>Proyecto uno</p>
          <span>Revisar reportes del miercoles</span>
        </div>
      </td>
      <td className={styles.tableText}>
        {events ? <AvatarGroup team={team} /> : "Incidencia"}
      </td>
      <td className={styles.tableText}>
        <div className={styles.dateTableSummary}>
          <p className={styles.dateText}>12/08/2024</p>
          <span>
            <Image src={ClockIcon} alt="Clock Icon" className={styles.icon} />
            15:00
          </span>
        </div>
      </td>
    </tr>
  );
};

export const TableSummary = ({ events }) => {
  return (
    <>
      <table className={styles.tableContainerSummary}>
        <thead className={styles.dividerTableSummary}>
          <tr>
            <th className={styles.tableText + " " + styles.firstTh}>Proyecto</th>
            <th className={styles.tableText + " " + styles.secondTh}>{events ? "Equipo" : "Item"}</th>
            <th className={styles.tableText + " " + styles.thirdTh}>Fecha Límite</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 3 }).map((_, index) => (
            <RowTable key={index} events={events} />
          ))}
        </tbody>
      </table>
    </>
  );
};
