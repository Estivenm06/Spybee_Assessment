import { FilterBtn } from "./FilterBtn";

export const FilterDropdown = ({ options, show }) => {
  return (
    <div
      className="filterContainer"
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
