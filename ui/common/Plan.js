"use client";
import styles from "@/ui/css/card.module.css";

const PlanComponent = ({ planName, planClass }) => {
  return <p className={planClass}>{planName}</p>;
};

export const Plan = ({ planName, mobile }) => {
  switch (planName) {
    case "big":
      if (!mobile) {
        return (
          <PlanComponent planName={"Avanzado"} planClass={"planDataAdvanced"} />
        );
      }
      return (
        <PlanComponent
          planName={"Avanzado"}
          planClass={styles.planDataAdvancedMobile}
        />
      );
    case "small":
      if (!mobile) {
        return (
          <PlanComponent planName={"Pequeño"} planClass={"planDataSmall"} />
        );
      }
      return (
        <PlanComponent
          planName={"Pequeño"}
          planClass={styles.planDataSmallMobile}
        />
      );
  }
};
