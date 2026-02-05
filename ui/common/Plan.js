"use client"
const PlanComponent = ({ planName, planClass }) => (
  <p className={planClass}>{planName}</p>
);

export const Plan = ({ planName }) => {
  switch (planName) {
    case "big":
      return (
        <PlanComponent planName={"Avanzado"} planClass={"planDataAdvanced"} />
      );
  }
};
