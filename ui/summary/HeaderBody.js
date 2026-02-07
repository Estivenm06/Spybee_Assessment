import Image from "next/image";

export const HeaderBody = ({ srcIcon, label }) => {
  return (
    <div className="summaryHeaderBody">
      <Image src={srcIcon} alt="Icon" className="icon" />
      <p className="HeaderBodyLargeText">{label}</p>
      <p className="seeAllText">Ver todos</p>
    </div>
  );
};
