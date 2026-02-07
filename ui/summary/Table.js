import Image from "next/image";

import ClockIcon from "@/public/clock.svg";

const RowTable = () => {
  return (
    <tr className="dividerTableSummary">
      <td className="tableText">
        <div className="tableFirstCol">
          <p>Proyecto uno</p>
          <span>Revisar reportes del miercoles</span>
        </div>
      </td>
      <td className="tableText">Incidencia</td>
      <td className="tableText">
        <div className="dateTableSummary">
          <p className="dateText">12/08/2024</p>
          <span>
            <Image src={ClockIcon} alt="Clock Icon" className="icon" />
            15:00
          </span>
        </div>
      </td>
    </tr>
  );
};

export const TableSummary = () => {
  return (
    <>
      <table className="tableContainerSummary">
        <thead className="dividerTableSummary">
          <tr>
            <th className="tableText firstTh">Proyecto</th>
            <th className="tableText secondTh">Item</th>
            <th className="tableText thirdTh">Fecha Límite</th>
          </tr>
        </thead>
        <tbody>
            {Array.from({ length: 3 }).map((_, index) => <RowTable key={index} />)}
        </tbody>
      </table>
    </>
  );
};
