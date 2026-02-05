export const Pagination = ({ value, updatePageFunction }) => {
  return (
    <li className="paginationLI">
      <button className="paginationBtn" onClick={updatePageFunction}>
        {value}
      </button>
    </li>
  );
};
