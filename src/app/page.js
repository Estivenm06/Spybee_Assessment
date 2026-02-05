import { Table } from "@/ui/table";

import mockData from "@/mocks/mock_data.json";

export default function Home() {
  const projects = mockData;
  return (
    <main>
      <Table  projects={projects}/>
    </main>
  );
}
