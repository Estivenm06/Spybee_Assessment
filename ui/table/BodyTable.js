import Image from "next/image";

import { AvatarGroup } from "@/ui/common/avatar";
import { Item } from "@/ui/common/items";
import { Plan } from "@/ui/common/Plan";
import { Status } from "@/ui/common/Status";

import { dateFormat, teamFormat } from "../utils/utils";

import avatar from "@/public/transparentAvatar.webp";

const BodyTable = ({ project }) => {
  const {
    users,
    title,
    lastVisit,
    lastUpdated,
    projectPlanData,
    status,
    incidents,
  } = project;
  const team = teamFormat(users);

  return (
    <tr className="row">
      <td className="projectTitleCol">
        <Image className="dataImage" src={avatar} alt="Project_Avatar" />
        <div className="dataTitleContainer">
          <h3 className="dataTitle">{title}</h3>
          <p className="dataSub">
            {dateFormat(lastVisit)} <span>{dateFormat(lastUpdated)}</span>
          </p>
        </div>
      </td>
      <td className="projectCol">
        <Plan planName={projectPlanData.plan} />
      </td>
      <td className="projectCol">
        <Status projectStatus={status} />
      </td>
      <td className="projectCol" >
        <AvatarGroup team={team} truncate />
      </td>
      <td className="projectCol">
        <ul className="tableItems">
          <Item number={incidents.length} type={"Incidencias"} />
          <Item number={incidents.length} type={"RFI"} />
          <Item number={incidents.length} type={"Tareas"} />
        </ul>
      </td>
    </tr>
  );
};

export { BodyTable };
