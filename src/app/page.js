"use client";
import { useMemo } from "react";

import { Table } from "@/ui/table";
import { Card } from "@/ui/card";
import { Map } from "@/ui/common/Map";
import { Summary } from "@/ui/summary";

import { useGetData } from "@/ui/states/useData";
import { useActions } from "@/ui/states/useActions";
import { NoData } from "@/ui/common/noData";

export default function Home() {
  const projects = useGetData((s) => s.projects);
  const { list, card, map } = useActions((s) => s.actions);
  const sortBy = useActions((s) => s.sortBy);

  const showMap = map;
  const showTable = list;
  const showCard = card;

  const visibleProjects = useMemo(() => {
    const projectsClone = [...projects];

    switch (sortBy) {
      case "AlphaOrder":
        projectsClone.sort((a, b) => {
          const nameA = a.title.toLowerCase();
          const nameB = b.title.toLowerCase();
          if (nameA < nameB) return -1;
          if (nameA > nameB) return 1;
          return 0;
        });
      case "Incidents":
        projectsClone.sort((a, b) => b.incidents.length - a.incidents.length);
      case "RFI":
        projectsClone.sort((a, b) => b.incidents.length - a.incidents.length);
      case "Tasks":
        projectsClone.sort((a, b) => b.incidents.length - a.incidents.length);
    }

    return projectsClone;
  }, [projects, sortBy]);

  if (visibleProjects.length == 0)
    return (
      <>
        <NoData />
        <Summary />
      </>
    );

  return (
    <main className={showTable ? "mainContainerTable" : "mainContainer"}>
      {showMap && (
        <>
          <Map projects={visibleProjects} />
          <Summary />
          <Table projects={visibleProjects} mapActive />
        </>
      )}
      {showTable && (
        <>
          <Table projects={visibleProjects} />
          <Summary />
        </>
      )}
      {showCard && (
        <>
          <Card projects={visibleProjects} />
          <Summary />
        </>
      )}
    </main>
  );
}
