import { AvatarGroup } from "@/ui/common/avatar";
import { Item } from "@/ui/common/items";
import { Plan } from "@/ui/common/Plan";
import { Status } from "@/ui/common/Status";

import { dateFormat, teamFormat } from "../utils/utils";

const BodyTable = ({ project }) => {
  const {
    users,
    img,
    title,
    lastVisit,
    lastUpdated,
    projectPlanData,
    status,
    incidents,
  } = project;
  const team = teamFormat(users);

  return (
    <>
        <tr className="row">
          <td className="dataProject">
            {/* <Image className="dataImage" alt="Project Logo" /> */}
            <div className="dataTitleContainer">
              <h3 className="dataTitle">{title}</h3>
              <p className="dataSub">
                {dateFormat(lastVisit)} <span>{dateFormat(lastUpdated)}</span>
              </p>
            </div>
          </td>
          <td className="dataPlan">
            <Plan planName={projectPlanData.plan} />
          </td>
          <td className="dataStatus">
            <Status projectStatus={status} />
          </td>
          <td className="dataTeam">
            <div className="avatarContainer">
              <AvatarGroup team={team} truncate />
            </div>
          </td>
          <td className="dataItems">
            <ul className="tableItems">
              <Item number={incidents.length} type={"Incidencias"} />
              <Item number={incidents.length} type={"RFI"} />
              <Item number={incidents.length} type={"Tareas"} />
            </ul>
          </td>
        </tr>
    </>
  );
};

export { BodyTable };
