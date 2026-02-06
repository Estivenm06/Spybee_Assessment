import Image from "next/image";
import bars from "@/public/bars-sort.svg";
import { useState } from "react";

import { FilterDropdown } from "./FilterDropdown";

const filterOptions = [
  { label: "Orden Alfabetico", option: "AlphaOrder" },
  { label: "Numero de Incidencias", option: "Incidents" },
  { label: "Numero de RFI", option: "RFI" },
  { label: "Numero de Tareas", option: "Tasks" },
];

export const Filter = () => {
  const [dropdown, setDropdown] = useState(false);
  const enableDropDown = () => setDropdown((prev) => !prev);

  return (
    <div className="filter">
      <div className="dropdownContainer">
        <button
          className="dropdownBtn"
          onClick={enableDropDown}
          value={dropdown}
        >
          <Image
            className="filterImage"
            src={bars}
            width={12}
            height={12}
            alt="Bars Icon"
          />
        </button>
      </div>
      <FilterDropdown options={filterOptions} show={dropdown} />
    </div>
  );
};
