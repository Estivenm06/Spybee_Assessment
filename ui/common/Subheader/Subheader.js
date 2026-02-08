"use client";

import { Filter } from "../Filter/Filter";
import { Actions } from "./Actions";
import { BtnProject } from "./BtnProject";
import { Seeker } from "./Seeker";

import { useGetData } from "@/ui/states/useData";

import styles from "./subheader.module.css";

export const SubHeader = () => {
  const lengthP = useGetData((s) => s.lengthP);

  return (
    <section className={styles.subheader}>
      <div className={styles.subtitleContainer}>
        <h2 className={styles.subtitle}>Mis proyectos</h2>
        <span className={styles.subcounter}>{lengthP()} proyectos</span>
      </div>
      <div className={styles.optionsContainer}>
        <div className={styles.actionsContainer}>
          <Filter />
          <Actions />
        </div>
        <div className={styles.seekerContainer}>
          <Seeker />
        </div>
        <BtnProject />
      </div>
    </section>
  );
};
