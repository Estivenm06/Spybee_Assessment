
import styles from "./cardSummary.module.css";

export const CardSummary = ({ card }) => {
  
  const { percentage, label, total } = card;

  return (
    <div className={styles.cardSummary}>
      <div className={styles.cardHeader}>
        <h3>{label}</h3>
        <span>{total}</span>
        <p>Total Abiertas</p>
      </div>
      <div className={styles.circle} style={{ '--percentage': percentage }}>
        <p className={styles.circleCenter}>{percentage}</p>
      </div>
    </div>
  );
};
