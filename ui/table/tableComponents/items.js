import styles from "./items.module.css"

export const Item = ({ number, type }) => {
  return (
    <li>
      <p className={styles.metricNumber}>
        {number}
        <span className={styles.metricLabel}>{type}</span>
      </p>{" "}
    </li>
  );
};
