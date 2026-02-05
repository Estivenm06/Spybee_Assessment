import { Table } from "@/ui/table";
import { Card } from "@/ui/card";

import mockData from "@/mocks/mock_data.json";

export default function Home() {
  const projects = mockData;
  return (
    <main>  
      {/* <Table  projects={projects}/> */}
      <Card  projects={projects}/>
    </main>
  );
}
