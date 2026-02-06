"use client";

import { Filter } from "./Filter";
import { Actions } from "./Actions";
import { BtnProject } from "./BtnProject";
import { Seeker } from "./Seeker";

import { useGetData } from "../states/useData";

export const SubHeader = () => {
  const lengthP = useGetData((s) => s.lengthP);

  return (
    <section className="subheader">
      <div className="subtitleContainer">
        <h2 className="subtitle">Mis proyectos</h2>
        <span className="subcounter">{lengthP()} proyectos</span>
      </div>
      <div className="optionsContainer">
        <div className="actionsContainer">
          <Filter />
          <Actions />
        </div>
        <div className="seekerContainer">
          <Seeker />
        </div>
        <BtnProject />
      </div>
    </section>
  );
};
