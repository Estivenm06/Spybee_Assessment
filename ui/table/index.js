import { HeaderTable } from "./HeaderTable";
import { BodyTable } from "./BodyTable";

import "../css/table.css"

export const Table = ({ projects }) => {

  return (
    <>
      <table>
        <HeaderTable />
        <BodyTable />
      </table>
    </>
  );
};
