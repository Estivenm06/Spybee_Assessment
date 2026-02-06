"use client";

import { Table } from "@/ui/table";
import { Card } from "@/ui/card";
import { Map } from "@/ui/common/Map";
import { useGetData } from "@/ui/states/useData";

import { useActions } from "@/ui/states/useActions";

export default function Home() {
  const projects = useGetData((s) => s.projects);
  const { list, card, map } = useActions((s) => s.filters);

  return (
    <main>
      {list && <Table projects={projects} />}
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
