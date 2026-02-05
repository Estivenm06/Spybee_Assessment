export const Item = ({ number, type }) => {
  return (
    <li className="tableLi">
      <p className="tableP">
        {number}
        <span className="tableSpan">{type}</span>
      </p>{" "}
    </li>
  );
};
