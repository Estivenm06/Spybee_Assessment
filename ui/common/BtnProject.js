"use client";
import { useMediaQuery } from "../states/usemediaQuery";

export const BtnProject = () => {
  const isMobile = useMediaQuery("(max-width: 835px)");
  return (
    <>
      {isMobile ? (
        <button className="createBtn">
          <span>+</span>
        </button>
      ) : (
        <button className="createBtn">
          <span>+</span>
          Crear proyecto
        </button>
      )}
    </>
  );
};
