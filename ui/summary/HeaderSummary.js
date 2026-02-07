import Image from "next/image";

import PresentationIcon from "@/public/presentation-folder.svg";
import FilterIcon from "@/public/filter.svg";

export const HeaderSummary = () => {
    return (
        <>
        <div className="summaryHeader">
            <Image
              src={PresentationIcon}
              alt="PresentationIconIcon"
              className="presentationIcon"
            />
          <h4>Resumen</h4>
        </div>
        <div className="viewsContainer">
            <div className="generalContainer">
              <p className="viewText">
                General
              </p>
            </div>
            <div className="updatesContainer">
              <p className="viewText">
                Mis actualizaciones
              </p>
            </div>
            <div className="filterContainerSummary">
                <Image src={FilterIcon} alt="Filter Icon" className="icon" />
              <p className="viewText" style={{ fontSize: "1rem", fontWeight: "bold" }}>
                Filtros
              </p>
            </div>
        </div>
        </>
    )
}