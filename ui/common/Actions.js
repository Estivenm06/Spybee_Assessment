import Image from "next/image";

import app from "@/public/apps.svg";
import list from "@/public/list.svg";
import marker from "@/public/marker.svg";

const ActionButton = ({ actionClass, actionSrc, actionAlt }) => {
  return (
    <li>
      <button className={actionClass}>
        <Image src={actionSrc} width={12} height={12} alt={actionAlt} preload />
      </button>
    </li>
  );
};

export const Actions = () => {
  return (
    <div className="actions">
      <ul className="actionsUL">
        <ActionButton
          actionAlt={"List Icon"}
          actionClass={"listBtn"}
          actionSrc={list}
        />
        <ActionButton
          actionAlt={"App Icon"}
          actionClass={"appBtn"}
          actionSrc={app}
        />
        <ActionButton
          actionAlt={"Marker Icon"}
          actionClass={"mapBtn"}
          actionSrc={marker}
        />
      </ul>
    </div>
  );
};
