"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Server } from "lucide-react"

type Asset = {
    name: string
    ip: string
    risk: string
  }
  export const columns: ColumnDef<Asset>[] = [
    {
      accessorKey: "name",
      header: "Asset",
      cell: ({ row }) => {
        const name = row.getValue("name") as string
        const ip = row.original.ip
  
        return (
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 p-2 rounded-full">
              <Server className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <div className="text-sm font-medium text-primary">{name}</div>
              <div className="text-sm text-muted-foreground">{ip}</div>
            </div>
          </div>
        )
      },
    },
    {
      accessorKey: "risk",
      header: "Contextual Risk",
      cell: ({ getValue }) => {
        const risk = getValue() as string
        return (
          <span className="bg-red-100 text-red-700 px-3 py-1 text-sm font-semibold rounded-full">
            {risk}
          </span>
        )
      },
    },
  ]