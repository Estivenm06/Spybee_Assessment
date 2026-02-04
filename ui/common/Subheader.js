import Image from "next/image";
import Form from "next/form";

import app from "@/public/apps.svg";
import bars from "@/public/bars-sort.svg";
import list from "@/public/list.svg";
import marker from "@/public/marker.svg";
import search from "@/public/search.svg";

export const SubHeader = ({}) => {
  return (
    <section className="subheader">
      <div className="subtitleContainer">
        <h2 className="subtitle">Mis proyectos</h2>
        <span className="subcounter">13 proyectos</span>
      </div>
      <div className="optionsContainer">
        <div className="actionsContainer">
          <div className="filter">
            <button className="filterBtn">
              <Image src={bars} width={12} height={12} alt="Bars Icon" />
            </button>
          </div>
          <div className="actions">
            <ul className="actionsUL">
              <li>
                <button className="listBtn">
                  <Image src={list} width={12} height={12} alt="List Icon" />
                </button>
              </li>
              <li>
                <button className="appBtn">
                  <Image src={app} width={12} height={12} alt="App Icon" />
                </button>
              </li>
              <li>
                <button className="mapBtn">
                  <Image
                    src={marker}
                    width={12}
                    height={12}
                    alt="Marker Icon"
                  />
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="seekerContainer">
          <Form action="/search">
            <input placeholder="Buscar" className="input" />
            <button type="submit">
              <Image src={search} width={15} height={15} alt="Search Icon" />
            </button>
          </Form>
        </div>
        <button className="createProjectBtn">
          <span>+</span>
          Crear proyecto
        </button>
      </div>
    </section>
  );
};
