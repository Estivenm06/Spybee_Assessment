"use client";

import Image from "next/image";

import cardIcon from "@/public/card.svg";
import listIcon from "@/public/list.svg";
import mapIcon from "@/public/map.svg";

import { useActions } from "../states/useActions";
import { useMediaQuery } from "../states/usemediaQuery";

const ActionButton = ({ icon, alt, disabled, onClick }) => {
  return (
    <li>
      <button className="actionBtn" disabled={disabled} onClick={onClick}>
        <Image src={icon} width={12} height={12} alt={alt} priority />
      </button>
    </li>
  );
};

const ACTIONS = [
  { name: "list", alt: "List Icon", icon: listIcon },
  { name: "card", alt: "Card Icon", icon: cardIcon },
  { name: "map", alt: "Map Icon", icon: mapIcon },
];

export const Actions = () => {
  const actions = useActions((state) => state.actions);
  const setActions = useActions((state) => state.setActions);
  const isMobile = useMediaQuery("(max-width: 930px)");

  const disabled_on_mobile = "list";

  return (
    <div className="actions">
      <ul className="actionsUL">
        {ACTIONS.map((a) => {
          const isActive = !!actions[a.name];

          let disabled = isMobile ? disabled_on_mobile == a.name : isActive;

          return (
            <ActionButton
              key={a.name}
              icon={a.icon}
              alt={a.alt}
              disabled={disabled}
              onClick={() => setActions(a.name)}
            />
          );
        })}
      </ul>
    </div>
  );
};
