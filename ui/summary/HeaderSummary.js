import Image from "next/image";

import PresentationIcon from "@/public/presentation-folder.svg";
import FilterIcon from "@/public/filter.svg";

import styles from "./summary.module.css";

const HeaderText = ({ label, containerClass }) => {
  return (
    <div className={containerClass}>
      <p
        className={styles.viewText}
        style={{ fontSize: "1rem", fontWeight: "bold" }}
      >
        {label}
      </p>
    </div>
  );
};

export const HeaderSummary = () => {
  return (
    <>
      <div className={styles.summaryHeader}>
        <Image
          src={PresentationIcon}
          alt="PresentationIconIcon"
          className={styles.presentationIcon}
        />
        <h4>Resumen</h4>
      </div>
      <div className={styles.viewsContainer}>
        <HeaderText
          label={"General"}
          containerClass={styles.generalContainer}
        />
        <HeaderText
          label={"Mis actualizaciones"}
          containerClass={styles.updatesContainer}
        />
        <div className={styles.filterContainerSummary}>
          <Image src={FilterIcon} alt="Filter Icon" className={styles.icon} />
          <p
            className={styles.viewText}
            style={{ fontSize: "1rem", fontWeight: "bold" }}
          >
            Filtros
          </p>
        </div>
      </div>
    </>
  );
};
