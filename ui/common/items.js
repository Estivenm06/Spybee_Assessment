export const Item = ({ number, type }) => {
  return (
    <li className="tableLi">
      <p className="metricNumber">
        {number}
        <span className="metricLabel">{type}</span>
      </p>{" "}
    </li>
  );
};
