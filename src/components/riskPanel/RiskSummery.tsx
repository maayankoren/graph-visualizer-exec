

"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"
import { useEffect } from "react"
import { PieChart, Pie, Cell } from "recharts"
import PieIndex from "../ui/index/pieIndex"


type RiskItem = {
  name: string
  value: number
  color: string
}
export default function RiskSummary({ data }: { data: RiskItem[] }) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])


  if (!mounted) return null 

  return (
    <Card className="max-w-xs rounded-xl shadow p-4">
      <CardContent className="flex items-center justify-between">
        <PieIndex data={data}/>

        <div >
          <PieChart width={160} height={160}>
            <Pie
              data={data}
              dataKey="value"
              innerRadius={55}
              outerRadius={65}
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
              labelLine={false} 

            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>

          </PieChart>
        
        </div>
      </CardContent>
    </Card>
  )
}
