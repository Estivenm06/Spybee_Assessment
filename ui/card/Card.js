import Image from "next/image";

import { Item } from "../common/items";
import { AvatarGroup } from "../common/avatar";
import { Plan } from "../common/Plan";
import { Status } from "../common/Status";

import { dateFormat, teamFormat } from "../utils/utils";

export const CardComponent = ({ project }) => {
  const team = teamFormat(project.users);

  return (
    <div className="singlecardContainer">
      {/* <Image /> */}
      <div className="cardHeaderProject">
        <div className="cardTitleProject">
          <h3 className="dataTitle">{project.title}</h3>
          <p className="dataSub">
            {dateFormat(project.lastVisit)}{" "}
            <span>{dateFormat(project.lastUpdated)}</span>
          </p>
        </div>
        <div className="cardPlan">
          <div>
            <Plan planName={project.projectPlanData.plan} mobile />
          </div>
          <div>
            <Status projectStatus={project.status} mobile />
          </div>
        </div>
      </div>
      <div className="divider" />
      <div className="cardBodyProjects">
        <AvatarGroup team={team} truncate mobile />
        <div>
          <ul className="tableItems">
            <Item number={project.incidents.length} type={"Incidencias"} />
            <Item number={project.incidents.length} type={"RFI"} />
            <Item number={project.incidents.length} type={"Tareas"} />
          </ul>
        </div>
      </div>
    </div>
  );
};
