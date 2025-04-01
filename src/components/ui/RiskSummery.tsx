

"use client"

// // import { TrendingUp } from "lucide-react"
// // import { Pie, PieChart } from "recharts"

// // import {
// //   Card,
// //   CardContent,
// //   CardDescription,
// //   CardFooter,
// //   CardHeader,
// //   CardTitle,
// // } from "@/components/ui/card"
// // import {
// //   ChartConfig,
// //   ChartContainer,
// //   ChartTooltip,
// //   ChartTooltipContent,
// // } from "@/components/ui/chart"
// // const chartData = [
// //   { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
// //   { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
// //   { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
// //   { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
// //   { browser: "other", visitors: 90, fill: "var(--color-other)" },
// // ]

// // const chartConfig = {
// //   visitors: {
// //     label: "Visitors",
// //   },
// //   chrome: {
// //     label: "Chrome",
// //     color: "hsl(var(--chart-1))",
// //   },
// //   safari: {
// //     label: "Safari",
// //     color: "hsl(var(--chart-2))",
// //   },
// //   firefox: {
// //     label: "Firefox",
// //     color: "hsl(var(--chart-3))",
// //   },
// //   edge: {
// //     label: "Edge",
// //     color: "hsl(var(--chart-4))",
// //   },
// //   other: {
// //     label: "Other",
// //     color: "hsl(var(--chart-5))",
// //   },
// // } satisfies ChartConfig

// // export default function RiskSummary() {
// //   return (
// //     <Card className="flex flex-col">
// //       <CardHeader className="items-center pb-0">
// //         <CardTitle>Pie Chart - Donut</CardTitle>
// //         <CardDescription>January - June 2024</CardDescription>
// //       </CardHeader>
// //       <CardContent className="flex-1 pb-0">
// //         <ChartContainer
// //           config={chartConfig}
// //           className="mx-auto aspect-square max-h-[250px]"
// //         >
// //           <PieChart>
// //             <ChartTooltip
// //               cursor={false}
// //               content={<ChartTooltipContent hideLabel />}
// //             />
// //             <Pie
// //               data={chartData}
// //               dataKey="visitors"
// //               nameKey="browser"
// //               innerRadius={60}
// //             />
// //           </PieChart>
// //         </ChartContainer>
// //       </CardContent>
// //       <CardFooter className="flex-col gap-2 text-sm">
// //         <div className="flex items-center gap-2 font-medium leading-none">
// //           Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
// //         </div>
// //         <div className="leading-none text-muted-foreground">
// //           Showing total visitors for the last 6 months
// //         </div>
// //       </CardFooter>
// //     </Card>
// //   )
// // }

// "use client"

// import { TrendingUp } from "lucide-react"
// import {
//   Label,
//   PolarGrid,
//   PolarRadiusAxis,
//   RadialBar,
//   RadialBarChart,
// } from "recharts"

// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
// import { ChartConfig, ChartContainer } from "@/components/ui/chart"
// const chartData = [
//   { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
// ]

// const chartConfig = {
//   visitors: {
//     label: "Visitors",
//   },
//   safari: {
//     label: "Safari",
//     color: "hsl(var(--chart-2))",
//   },
// } satisfies ChartConfig

// export default function RiskSummary() {
//   return (
//     <Card className="flex flex-col">
//       <CardHeader className="items-center pb-0">
//         <CardTitle>Radial Chart - Text</CardTitle>
//         <CardDescription>January - June 2024</CardDescription>
//       </CardHeader>
//       <CardContent className="flex-1 pb-0">
//         <ChartContainer
//           config={chartConfig}
//           className="mx-auto aspect-square max-h-[250px]"
//         >
//           <RadialBarChart
//             data={chartData}
//             startAngle={0}
//             endAngle={250}
//             innerRadius={80}
//             outerRadius={110}
//           >
//             <PolarGrid
//               gridType="circle"
//               radialLines={false}
//               stroke="none"
//               className="first:fill-muted last:fill-background"
//               polarRadius={[86, 74]}
//             />
//             <RadialBar dataKey="visitors" background cornerRadius={10} />
//             <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
//               <Label
//                 content={({ viewBox }) => {
//                   if (viewBox && "cx" in viewBox && "cy" in viewBox) {
//                     return (
//                       <text
//                         x={viewBox.cx}
//                         y={viewBox.cy}
//                         textAnchor="middle"
//                         dominantBaseline="middle"
//                       >
//                         <tspan
//                           x={viewBox.cx}
//                           y={viewBox.cy}
//                           className="fill-foreground text-4xl font-bold"
//                         >
//                           {/* {chartData[0].visitors.toLocaleString()} */}
//                         </tspan>
//                         <tspan
//                           x={viewBox.cx}
//                           y={(viewBox.cy || 0) + 24}
//                           className="fill-muted-foreground"
//                         >
//                           Visitors
//                         </tspan>
//                       </text>
//                     )
//                   }
//                 }}
//               />
//             </PolarRadiusAxis>
//           </RadialBarChart>
//         </ChartContainer>
//       </CardContent>
//       <CardFooter className="flex-col gap-2 text-sm">
//         <div className="flex items-center gap-2 font-medium leading-none">
//           Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
//         </div>
//         <div className="leading-none text-muted-foreground">
//           Showing total visitors for the last 6 months
//         </div>
//       </CardFooter>
//     </Card>
//   )
// }
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"
import { useEffect } from "react"
import { PieChart, Pie, Cell } from "recharts"


type RiskItem = {
  name: string
  value: number
  color: string
}
export default function RiskSummary({ data }: { data: RiskItem[] }) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const total = data.reduce((sum, item) => sum + item.value, 0)

  if (!mounted) return null // avoid hydration errors

  return (
    <Card className="max-w-xs rounded-xl shadow p-4">
      <CardContent className="flex items-center justify-between">
        {/* Text side */}
        <div className="space-y-2">
          <h4 className="text-muted-foreground font-semibold">Contextual Risk</h4>
          {data.map((item) => (
            <div key={item.name} className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
              <span className="font-bold text-sm">{item.value}</span>
              <span className="text-sm text-muted-foreground">{item.name}</span>
            </div>
          ))}
        </div>

        {/* Chart side */}
        <div className="w-24 h-24">
          <PieChart width={96} height={96}>
            <Pie
              data={data}
              dataKey="value"
              innerRadius={34}
              outerRadius={40}
              stroke="none"
              startAngle={90}
              endAngle={-270}
              label={({ cx, cy }) => {
                const total = data.reduce((sum, d) => sum + d.value, 0)
                return (
                  <text x={cx} y={cy} textAnchor="middle" dominantBaseline="middle" className="fill-gray-500 text-lg font-bold">
                    {total}
                  </text>
                )
              }}
              labelLine={false} // ⬅️ זה מבטל את הקווים שיוצאים החוצה

            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>

            tsx
            Copy
            Edit
            {/* <Pie
              data={data}
              dataKey="value"
              innerRadius={34}
              outerRadius={48}
              startAngle={90}
              endAngle={-270}
              isAnimationActive={false}
              label={({ cx, cy }) => {
                const total = data.reduce((sum, d) => sum + d.value, 0)
                return (
                  <text x={cx} y={cy} textAnchor="middle" dominantBaseline="middle" className="fill-gray-500 text-lg font-bold">
                    {total}
                  </text>
                )
              }}
              labelLine={false} // מסתיר את הקו שיוצא מה label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie> */}
          </PieChart>
          {/* <div className="absolute w-24 h-24 flex items-center justify-center top-0 left-0 text-xl font-semibold text-muted-foreground">
            {total}
          </div> */}
        </div>
      </CardContent>
    </Card>
  )
}
