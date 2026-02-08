import { useActions } from "@/ui/states/useActions";

import styles from "./filter.module.css"

export const FilterBtn = ({ label, value }) => {
  const filterFn = useActions(s => s.setFilter)
  
  return (
    <li className={styles.filterLi}>
        <button className={styles.filterBtn} onClick={() => filterFn(value)}>
            <p className={styles.filterLabel}>{label}</p>
        </button>
    </li>
  );
};
