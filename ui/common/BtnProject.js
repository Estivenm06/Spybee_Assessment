"use client"
export const BtnProject = () => {
  const mediaQuery = window.matchMedia("(max-width: 875px)")
  if (mediaQuery.matches) {
    return (
      <button className="createProjectBtn">
        <span>+</span>
      </button>
    );
  }
    return (
      <button className="createProjectBtn">
        <span>+</span>
        Crear proyecto
      </button>
    );
};
