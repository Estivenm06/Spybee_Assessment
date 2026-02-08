"use client";
import { useMediaQuery } from "@/ui/states/usemediaQuery";

import styles from "./subheader.module.css"

export const BtnProject = () => {
  const isMobile = useMediaQuery("(max-width: 1000px)");
  
  return (
    <>
      {isMobile ? (
        <button className={styles.createBtn}>
          <span>+</span>
        </button>
      ) : (
        <button className={styles.createBtn}>
          <span>+</span>
          Crear proyecto
        </button>
      )}
    </>
  );
};
