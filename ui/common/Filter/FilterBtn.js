import { useActions } from "@/ui/states/useActions";

export const FilterBtn = ({ label, value }) => {
  const filterFn = useActions(s => s.setFilter)
  
  return (
    <li className="filterLi">
        <button className="filterBtn" onClick={() => filterFn(value)}>
            <p className="filterLabel">{label}</p>
        </button>
    </li>
  );
};
