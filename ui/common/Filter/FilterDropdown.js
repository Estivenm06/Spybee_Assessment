import { FilterBtn } from "./FilterBtn";

import styles from "./filter.module.css"

export const FilterDropdown = ({ options, show, isMobile }) => {
  return (
    <div
      className={isMobile ? styles.filterContainerMobile : styles.filterContainer}
      style={{ display: show ? "block" : "none" }}
    >
      <ul className={styles.filterContainerUl}>
        {options.map(({ label, option }) => {
          return <FilterBtn label={label} key={label} value={option} />;
        })}
      </ul>
    </div>
  );
};
