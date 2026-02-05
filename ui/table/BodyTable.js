"use client";
import Image from "next/image";
import spyBeeLogo from "@/public/spybeeLogo.webp";

import { AvatarGroup } from "@/ui/common/avatar";
import { Item } from "@/ui/common/items";
import { Plan } from "@/ui/common/Plan";
import { Status } from "@/ui/common/Status";

import mockData from "@/mocks/mock_data.json";

const dateFormat = (dateString) => {
  const options = { year: "numeric", month: "short", day: "2-digit" };
  return new Date(dateString).toLocaleDateString("es-ES", options);
};

const teamFormat = ({ users }) => {
  return users.map(
    ({ name, lastName }) => name.substring(0, 1) + lastName.substring(0, 1),
  );
};

const team = teamFormat(mockData[0]);

console.log(mockData[0]);

const BodyTable = () => {
  return (
    <>
      <tbody>
        <tr className="row">
          <td className="dataProject">
            <Image
              className="dataImage"
              alt="This is some image"
              src={spyBeeLogo}
            />
            <div className="dataTitleContainer">
              <h3 className="dataTitle">{mockData[0].title}</h3>
              <p className="dataSub">
                {dateFormat(mockData[0].lastVisit)}{" "}
                <span>{dateFormat(mockData[0].lastUpdated)}</span>
              </p>
            </div>
          </td>
          <td>
            <Plan planName={mockData[0].projectPlanData.plan} />
          </td>
          <td>
            <Status projectStatus={mockData[0].status} />
          </td>
          <td className="teamData">
            <div className="avatarContainer">
              <AvatarGroup team={team} truncate />
            </div>
          </td>
          <td>
            <ul className="tableItems">
              <Item
                number={mockData[0].incidents.length}
                type={"Incidencias"}
              />
              <Item number={mockData[0].incidents.length} type={"RFI"} />
              <Item number={mockData[0].incidents.length} type={"Tareas"} />
            </ul>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export { BodyTable };
