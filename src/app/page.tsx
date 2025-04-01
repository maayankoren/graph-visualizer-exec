// "use client";

// import React, { useState } from "react";
// import { ReactFlow } from "@xyflow/react";

// import "@xyflow/react/dist/style.css";
// import { Button } from "@/components/ui/button";
// import Flow from "@/components/GraphCanvas";

// const initialNodes = [
//   { id: "1", position: { x: 100, y: 100 }, data: { label: "1" } },
//   { id: "2", position: { x: 200, y: 200 }, data: { label: "2" } },
// ];
// const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

// export default function HomePage() {
//   const [count, setCount] = useState(0);
//     {/* <div style={{ width: "50vw", height: "50vh" }}>
//         <ReactFlow nodes={initialNodes} edges={initialEdges} />
//       </div> */}
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b">
//       {/* <h1 className="p-4 text-2xl font-bold">Your Code should be here</h1>
//       <div className="flex flex-col items-center justify-center">
//         <p>count is: {count}</p>
//         <Button onClick={() => setCount(count + 1)}>Click me</Button>
//       </div>

//       <div style={{ width: "50vw", height: "50vh" }}>
//         a,snda,smn
//         <Flow/>
//       </div> */}
//       <
//     </main>
//   );
// }
import { AppSidebar } from "@/components/app-sidebar"
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { DataTable } from "@/components/data-table"
import { SectionCards } from "@/components/section-cards"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

import DescriptionPanel from "@/components/ui/DescriptionPanel"
import DiagramPanel from "@/components/ui/DiagramPanel"
import RiskPanel from "@/components/ui/RiskPanel"
import RiskSummary from "@/components/ui/RiskSummery"

const data = [
  { name: "Critical", value: 2, color: "#B91C1C" },
  { name: "High", value: 0, color: "#DC2626" },
  { name: "Medium", value: 0, color: "#FACC15" },
  { name: "Low", value: 0, color: "#22C55E" },
]

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          {/* <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <SectionCards />
              <div className="px-4 lg:px-6">
                <ChartAreaInteractive />
              </div>
              <DataTable data={data} />
            </div>
          </div> */}
          <div className="flex gap-6">
            {/* צד שמאל */}
            <DescriptionPanel />

            {/* צד ימין */}
            <div className="flex flex-col flex-1 gap-4">
              <DiagramPanel />

              <div className="flex gap-4">
                <RiskPanel />
                <RiskSummary data={data}/>
              </div>
            </div>
          </div>


        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
