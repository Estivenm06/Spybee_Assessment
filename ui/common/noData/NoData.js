import styles from "./noData.module.css"

export const NoData = () => {
  return (
    <section className={styles.noDataContainer}>
      <h3 className={styles.noDataText}>
        Intenta nuevamente no hay elementos que coincidan.
      </h3>
    </section>
  );
};
