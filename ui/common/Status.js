import styles from "@/ui/css/card.module.css"

const StatusComponent = ({ statusClass, statusName }) => (
  <p className={statusClass}>{statusName}</p>
);

export const Status = ({ projectStatus, mobile }) => {
  switch (projectStatus) {
    case "suspended":
      if (!mobile) {
        return (
          <StatusComponent
            statusClass={"statusSuspended"}
            statusName={"Suspendido"}
          />
        );
      }
      return (
        <StatusComponent
          statusClass={styles.statusSuspendedMobile}
          statusName={"Suspendido"}
        />
      );
    case "active":
      if (!mobile) {
        return (
          <StatusComponent statusClass={"statusActive"} statusName={"Activo"} />
        );
      }
      return (
        <StatusComponent
          statusClass={styles.statusActiveMobile}
          statusName={"Activo"}
        />
      );
    case "inactive":
      if (!mobile) {
        return (
          <StatusComponent
            statusClass={"statusInactive"}
            statusName={"Inactivo"}
          />
        );
      }
      return (
        <StatusComponent
          statusClass={styles.statusInactiveMobile}
          statusName={"Inactivo"}
        />
      );
    case "pending_payment":
      if (!mobile) {
        return (
          <StatusComponent
            statusClass={"statusPended"}
            statusName={"Pendiente"}
          />
        );
      }
      return (
        <StatusComponent
          statusClass={styles.statusPendedMobile}
          statusName={"Pendiente"}
        />
      );
  }
};
