import Image from "next/image";

import styles from "./summary.module.css";    

export const HeaderBody = ({ srcIcon, label }) => {
  return (
    <div className={styles.summaryHeaderBody}>
      <Image src={srcIcon} alt="Icon" className={styles.icon} />
      <p className={styles.HeaderBodyLargeText}>{label}</p>
      <p className={styles.seeAllText}>Ver todos</p>
    </div>
  );
};
