import styles from "./pagination.module.css"

export const Pagination = ({ value, updatePageFunction }) => {
  return (
    <li className={styles.paginationLI}>
      <button className={styles.paginationBtn} onClick={updatePageFunction}>
        {value}
      </button>
    </li>
  );
};
