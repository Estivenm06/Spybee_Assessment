"use client";

import { usePagination } from "../states/usePagination";

import { HeaderTable } from "./HeaderTable";
import { BodyTable } from "./BodyTable";
import { Pagination } from "../common/Pagination";
import { NoData } from "../common/noData";

export const Table = ({ projects }) => {
  const page = usePagination((state) => state.page);
  const updatePage = usePagination((state) => state.updatePage);

  const itemsToShow = 10;
  const startIndex = page * itemsToShow;
  const endIndex = startIndex + itemsToShow;
  const projectsLength = projects.length;
  const buttonToShow = Math.floor(projectsLength / itemsToShow);
  const projectsToShow = projects.slice(startIndex, endIndex);

  return (
    <>
      <section className="tableSection" style={{ gridArea: "table" }}>
        {projectsLength == 0 && <NoData />}
        {projectsLength !== 0 && (
          <>
          <div className="tableWrap">
            <table className="tableContainer">
              <HeaderTable />
              <tbody className="tableBody">
                {projectsToShow.map((project) => (
                  <BodyTable project={project} key={project._id} />
                ))}
              </tbody>
            </table>
          </div>
            {/* Pagination */}
            <div>
              <ul className="paginationContainer">
                {Array.from({ length: buttonToShow }).map((_, index) => (
                  <Pagination
                    key={index}
                    updatePageFunction={() => updatePage(index)}
                    value={index + 1}
                  />
                ))}
              </ul>
            </div>
          </>
        )}
      </section>
    </>
  );
};
