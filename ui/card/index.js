"use client";

import { usePagination } from "../states/usePagination";

import { Pagination } from "../common/Pagination/Pagination";
import { CardComponent } from "./Card";

import styles from "./card.module.css";
import stylesPagination from "../common/Pagination/pagination.module.css";

export const Card = ({ projects, mapActive }) => {
  const page = usePagination((state) => state.page);
  const updatePage = usePagination((state) => state.updatePage);

  const itemsToShow = 10;
  const startIndex = page * itemsToShow;
  const endIndex = startIndex + itemsToShow;
  const projectsLength = projects.length;

  const buttonToShow = Math.floor(projectsLength / itemsToShow);
  const projectsToShow = projects.slice(startIndex, endIndex);

  return (
    <section className="container" style={{ height: mapActive ? "270px" : "" }}>
      {/* Card Component */}
      <div className={styles.cardContainerComponent}>
        {projectsToShow.map((project) => (
          <CardComponent project={project} key={project._id} />
        ))}
      </div>

      {/* Pagination */}
      <div>
        <ul className={stylesPagination.paginationContainer}>
          {Array.from({ length: buttonToShow }).map((_, index) => (
            <Pagination
              key={index}
              updatePageFunction={() => updatePage(index)}
              value={index + 1}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};
