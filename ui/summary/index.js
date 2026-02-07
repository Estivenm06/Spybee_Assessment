import Image from "next/image";

import PresentationIcon from "@/public/presentation-folder.svg";
import TimeIcon from "@/public/time.svg";
import CalendarIcon from "@/public/calendar.svg";

import { HeaderSummary } from "./HeaderSummary";
import { CardSummary } from "./CardSummary";
import { TableSummary } from "./TableSummary";
import { HeaderBody } from "./HeaderBody";
import { useState } from "react";

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

export const Summary = () => {
  const [summaryDropdown, setSummarydropdown] = useState(false);
  return (
    <section
      className="container summaryContainer"
      style={{ gridArea: "summary" }}
    >
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
          <HeaderBody label={"Próximos a vencer"} srcIcon={TimeIcon} />
          <div className="cardsContainer">
            {CardsValues.map((card) => (
              <CardSummary key={card.label} card={card} />
            ))}
          </div>
          <div className="summarytableContainer">
            <TableSummary />
          </div>
          <div className="summarytableContainer">
            <HeaderBody label={"Próximos eventos"} srcIcon={CalendarIcon} />
            <TableSummary events />
          </div>
        </div>
      </div>
    </section>
  );
};
