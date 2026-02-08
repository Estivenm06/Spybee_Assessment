import Image from "next/image";

import styles from "./subitem.module.css";

export const SubItem = ({ icon, text }) => {
  return (
    <p className={styles.dataSubItem}>
      <Image src={icon} alt={`${text} Icon`} width={12} height={12} />
      {text}
    </p>
  );
};
