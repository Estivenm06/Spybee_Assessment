const PLAN_STYLES = {
  big: {
    label: "Avanzado",
    bg: "#7d7d7d",
  },
  small: {
    label: "Pequeño",
    bg: "#c35a00",
  },
  premium: {
    label: "Premium",
    bg: "#ebb400",
  },
};

const PlanPill = ({ plan, mobile }) => {
  const { label, bg } = plan;
  return (
      <p
        className={mobile ? "planMobile" : "plan"}
        style={{ backgroundColor: bg }}
      >
        {label}
      </p>
  );
};

export const Plan = ({ planName, mobile }) => {
  const plan = PLAN_STYLES[planName];

  if (!plan) return null;

  return <PlanPill plan={plan} mobile={mobile} />;
};
