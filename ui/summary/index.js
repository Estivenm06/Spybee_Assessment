import Image from "next/image";

import PresentationIcon from "@/public/presentation-folder.svg";
import TimeIcon from "@/public/time.svg";

import { HeaderSummary } from "./HeaderSummary";
import { Card } from "./Card";
import { TableSummary } from "./Table";

const CardsValues = [
  {
    label: "Incidencias",
    total: 60,
    percentage: 10,
  },
  {
    label: "RFI",
    total: 50,
    percentage: 23,
  },
  {
    label: "Tareas",
    total: 120,
    percentage: 50,
  },
];

export const Summary = ({ projects }) => {
  return (
    <section className="summaryContainer" style={{ gridArea: "summary" }}>
      <div className="summaryDropdownContainer">
        <div className="summaryDropdownBtnContainer">
          <div className="arrowBtnContainer">
            <button className="summaryBtns">&lt;</button>
          </div>
          <button className="summaryBtns">
            <Image
              src={PresentationIcon}
              alt="PresentationIconIcon"
              className="presentationIcon"
            />
          </button>
        </div>
      </div>
      <div>
        <HeaderSummary />
        <div className="summaryBody">
          <div className="summaryHeaderBody">
            <Image src={TimeIcon} alt="Time Icon" className="icon" />
            <p className="expirationText">Próximos a vencer</p>
            <p className="seeAllText">Ver todos</p>
          </div>
          <div className="cardsContainer">
            {CardsValues.map((card) => (
              <Card key={card.label} card={card} />
            ))}
          </div>
          <div className="summarytableContainer">
            <TableSummary />
          </div>
        </div>
      </div>
    </section>
  );
};
