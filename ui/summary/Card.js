export const Card = ({ card }) => {
  
  const { percentage, label, total } = card;

  return (
    <div className="cardSummary">
      <div className="cardHeader">
        <h3>{label}</h3>
        <span>{total}</span>
        <p>Total Abiertas</p>
      </div>
      <div className="circle" style={{ '--percentage': percentage }}>
        <p className="circle-center">{percentage}</p>
      </div>
    </div>
  );
};
