import Image from "next/image";
import bars from "@/public/bars-sort.svg";

export const Filter = () => {
  return (
    <div className="filter">
      <button className="filterBtn">
        <Image className="filterImage" src={bars} width={12} height={12} alt="Bars Icon" />
      </button>
    </div>
  );
};
