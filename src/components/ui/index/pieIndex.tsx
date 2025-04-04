
"use client"

import { RiskItem } from "@/types/RiskItem"


export default function PieIndex({ data }: { data: RiskItem[] }) {

  return (
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
  )
}
