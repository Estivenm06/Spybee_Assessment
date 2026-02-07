import Image from "next/image";

import TimeIcon from "@/public/time.svg";
import CalendarIcon from "@/public/calendar.svg";

import { HeaderSummary } from "./HeaderSummary";
import { CardSummary } from "./CardSummary";
import { TableSummary } from "./TableSummary";
import { HeaderBody } from "./HeaderBody";

import { useSummary } from "../states/useSummary";
import { DropDown } from "./DropdownBtn";
import { useMediaQuery } from "../states/usemediaQuery";

export const Summary = () => {
  const cardValues = useSummary((s) => s.cardValues);
  const dropdown = useSummary((s) => s.dropdown);
  const setDropdown = useSummary((s) => s.setDropdown);
  const isMobile = useMediaQuery("(max-width: 850px)")
  console.log(isMobile);

  if (!dropdown) return <DropDown setDropdown={setDropdown} />;

  return (
    <section className="container" style={{ gridArea: "summary" }}>
      <DropDown setDropdown={setDropdown} active />
      <div className={`summaryContainer ${isMobile ? "summaryContainerModal" : "summaryContainer"}`}>
        <HeaderSummary />
        <div className="summaryBody">
          <HeaderBody label={"Próximos a vencer"} srcIcon={TimeIcon} />
          <div className="cardsContainer">
            {cardValues.map((card) => (
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
