"use client";

import { Table } from "@/ui/table";
import { Card } from "@/ui/card";
import { Map } from "@/ui/common/Map";
import { useGetData } from "@/ui/states/useData";

import { useActions } from "@/ui/states/useActions";
import { useMediaQuery } from "@/ui/states/usemediaQuery";

export default function Home() {
  const projects = useGetData((s) => s.projects);
  const { list, card, map } = useActions((s) => s.filters);
  const isMobile = useMediaQuery("(max-width: 930px)");

  const showMap = map;
  const showTable = !isMobile && list;
  const showCard = isMobile || card;

  return (
    <main>
      {!isMobile && showMap && (
        <>
          <Map projects={projects} />
          <Table projects={projects} />
        </>
      )}
      {isMobile && showMap && (
        <>
          <Map projects={projects} />
          <Card projects={projects} />
        </>
      )}
      {showTable && <Table projects={projects} />}
      {showCard && !showMap && <Card projects={projects} />}
    </main>
  );
}
