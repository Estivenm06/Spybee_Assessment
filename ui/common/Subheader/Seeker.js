"use client";
import Image from "next/image";

import { useEffect, useState } from "react";

import search from "@/public/search.svg";
import { useGetData } from "@/ui/states/useData";

import style from "./subheader.module.css"

export const Seeker = () => {
  const [query, setQuery] = useState("");
  const seeker = useGetData((s) => s.seeker);

  useEffect(() => {
    seeker(query);
  }, [query, seeker]);

  return (
    <>
      <input
        placeholder="Buscar"
        className={style.seekerInput}
        type="text"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
      <button type="submit">
        <Image src={search} width={15} height={15} alt="Search Icon" />
      </button>
    </>
  );
};
