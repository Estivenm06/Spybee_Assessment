"use client";

import { usePagination } from "../states/usePagination";

import { Pagination } from "../common/Pagination";
import { CardComponent } from "./Card";

import "@/ui/css/card.css";

export const Card = ({ projects }) => {
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
      <section className="cardSection">
        {/* Card Component */}

        <div className="cardContainer">
          {projectsToShow.map((project) => (
            <CardComponent project={project} key={project._id} />
          ))}
        </div>

        {/* Pagination */}
        <div className="">
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
      </section>
    </>
  );
};
