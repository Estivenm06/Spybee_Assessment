"use client";

import Image from "next/image";

import cardIcon from "@/public/card.svg";
import listIcon from "@/public/list.svg";
import mapIcon from "@/public/map.svg";

import { useActions } from "../states/useActions";

const ActionButton = ({
  actionSrc,
  actionAlt,
  disabled,
  onClick,
  name
}) => {
  return (
    <li>
      <button name={name} className="filterButton" disabled={disabled} onClick={(ev) => onClick(ev.currentTarget.name)}>
        <Image src={actionSrc} width={12} height={12} alt={actionAlt} preload />
      </button>
    </li>
  );
};

export const Actions = () => {
  const { list, card, map } = useActions((state) => state.filters);
  const setFilters = useActions((state) => state.setFilters)

  return (
    <div className="actions">
      <ul className="actionsUL">
        <ActionButton
          actionAlt={"List Icon"}
          actionClass={"listBtn"}
          actionSrc={listIcon}
          disabled={list}
          name="list"
          onClick={setFilters}
          />
        <ActionButton
          actionAlt={"Card Icon"}
          actionClass={"cardBtn"}
          actionSrc={cardIcon}
          disabled={card}
          name="card"
          onClick={setFilters}
          />
        <ActionButton
          actionAlt={"Map Icon"}
          actionClass={"mapBtn"}
          actionSrc={mapIcon}
          disabled={map}
          name="map"
          onClick={setFilters}
        />
      </ul>
    </div>
  );
};
