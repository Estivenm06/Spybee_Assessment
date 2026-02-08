import Image from "next/image";
import bars from "@/public/bars-sort.svg";

import { FilterDropdown } from "./FilterDropdown";

import { useFilter } from "@/ui/states/useFilter";
import { useMediaQuery } from "@/ui/states/usemediaQuery";

const filterOptions = [
  { label: "Orden Alfabetico", option: "AlphaOrder" },
  { label: "Numero de Incidencias", option: "Incidents" },
  { label: "Numero de RFI", option: "RFI" },
  { label: "Numero de Tareas", option: "Tasks" },
];

import styles from "./filter.module.css"

export const Filter = () => {
  const dropdown = useFilter((s) => s.dropdown);
  const enableDropdown = useFilter((s) => s.enableDropdown);
  const isMobile = useMediaQuery("(max-width: 680px)");

  return (
    <div className={styles.filter}>
      <div className={styles.dropdownContainer}>
        <button
          className={styles.dropdownBtn}
          onClick={() => enableDropdown()}
          value={dropdown}
        >
          <Image
            className={styles.filterImage}
            src={bars}
            width={12}
            height={12}
            alt="Bars Icon"
          />
        </button>
      </div>
      <FilterDropdown
        options={filterOptions}
        show={dropdown}
        isMobile={isMobile}
      />
    </div>
  );
};
