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
  const notTable = useMediaQuery("(max-width: 931px)");

  if (map && notTable) {
    return (
      <>
        <Map projects={projects} />
        <Card projects={projects} />
      </>
    );
  } else {
    <>
      <Map projects={projects} />
      <Table projects={projects} />
    </>;
  }
  return (
    <main>
      {!map && notTable && <Card projects={projects} />}
      {!notTable && list && <Table projects={projects} />}
      {card && <Card projects={projects} />}
      {map && (
        <>
          <Map projects={projects} />
          <Table projects={projects} />
        </>
      )}
    </main>
  );
}
