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
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ShieldX } from "lucide-react"

const data = [
  { name: "Critical", value: 2, color: "#B91C1C" },
  { name: "High", value: 0, color: "#DC2626" },
  { name: "Medium", value: 0, color: "#FACC15" },
  { name: "Low", value: 0, color: "#22C55E" },
]

export default function Page() {
  return (
    // <SidebarProvider>
    //   <AppSidebar variant="inset" />
    //   <SidebarInset>
        // <SiteHeader />

        <div className="flex flex-1 flex-col px-4 py-6 md:px-8 md:py-8 bg-[#FAFAFA]">
          <div className="grid gap-6 lg:grid-cols-[1fr_2fr]">

            {/* --- שמאל: Description --- */}
            <div className="flex flex-col gap-6">
              <DescriptionPanel />
            </div>

            {/* --- ימין: עטוף ב-Card אחד --- */}
            <Card>
              <CardContent className="flex flex-col gap-6 pt-6">

                {/* כותרת עליונה */}
                <h2 className="text-xl font-semibold text-green-700 px-2">
                  Lorem Lorem Lorem
                </h2>

                {/* גרף */}
                {/* <Card>
            <DiagramPanel />
            zxkczxlkj
            <Separator className="my-4 w-[90%] mx-auto bg-gray-200" />
            <ShieldX />

            </Card> */}
                <Card className="shadow-md rounded-xl overflow-hidden h-[500px]">


                  <CardContent>
                    {/* מעטפת לגרף */}
                    <DiagramPanel />


                    {/* קו הפרדה קצר במרכז */}
                    {/* <div class
                    Name="w-2/3 h-px bg-gray-200 mx-auto my-4" /> */}
                    <Separator className="my-4 w-[90%] mx-auto bg-gray-200" />
                    {/* #e5372b */}
                    {/* #00983e */}
                    <div className="h-[20%] flex gap-6">
                      <div className="rounded-full bg-[#FF9500] w-10 h-10 flex items-center justify-center"> <ShieldX color='white' /></div>
                   
                    <ShieldX />
                    <ShieldX />
                    </div>
                    {/* לג'נד */}
                    {/* <div className="flex justify-center gap-6">
          <Legend color="red" label="Lorem" />
          <Legend color="orange" label="Lorem" />
          <Legend color="green" label="Lorem" />
        </div> */}
                  </CardContent>
                </Card>

                {/* מקרא צבעים */}


                {/* טבלת נכסים + סיכום */}
                <div className="flex flex-col gap-6">
                  <h2 className="text-xl font-semibold text-green-700 px-2">
                    Lorem Ipsum Dolor Sit
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <RiskPanel />
                    <RiskSummary data={data} />
                  </div>
                </div>

              </CardContent>
            </Card>
          </div>
        </div>
      
  )
}
