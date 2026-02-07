const STATUS_STYLES = {
  suspended: {
    label: "Suspendido",
    bg: "#d90429",
    color: "#ffffff",
  },
  active: {
    label: "Activo",
    bg: "#dcf0dc",
    color: "#3b9755",
  },
  inactive: {
    label: "Inactivo",
    bg: "#fac30f",
    color: "#fffefb",
  },
  pending_payment: {
    label: "Pendiente",
    bg: "#bebebe",
    color: "#ffffff",
  },
};

const StatusPill = ({ status, mobile }) => {
  const { label, bg, color } = status;
  return (
      <p
        className={mobile ? "statusMobile" : "status"}
        style={{ backgroundColor: bg, color: color }}
      >
        {label}
      </p>
  );
};

export const Status = ({ projectStatus, mobile }) => {
  const status = STATUS_STYLES[projectStatus];

  if (!status) return null;

  return <StatusPill status={status} mobile={mobile} />;
};
