import { FilterBtn } from "./FilterBtn";

export const FilterDropdown = ({ options, show, isMobile }) => {
  return (
    <div
      className={isMobile ? "filterContainerMobile" : "filterContainer"}
      style={{ display: show ? "block" : "none" }}
    >
      <ul className="filterContainerUl">
        {options.map(({ label, option }) => {
          return <FilterBtn label={label} key={label} value={option} />;
        })}
      </ul>
    </div>
  );
};
