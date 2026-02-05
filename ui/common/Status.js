const StatusComponent = ({ statusClass, statusName }) => <p className={statusClass}>{statusName}</p>

export const Status = ({ projectStatus }) => {
    switch (projectStatus) {
        case "suspended":
            return <StatusComponent statusClass={"statusSuspended"} statusName={"Suspendido"} />
        case "active":
            return <StatusComponent statusClass={"statusActive"} statusName={"Activo"} />
        
    }
}