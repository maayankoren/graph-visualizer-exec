"use client"

// import { ColumnDef } from "@tanstack/react-table"

// // This type is used to define the shape of our data.
// // You can use a Zod schema here if you want.
// export type Payment = {
//   id: string
//   amount: number
//   status: "pending" | "processing" | "success" | "failed"
//   email: string
// }

// export const columns: any[] = [
//   {
//     accessorKey: "asset",
//     header: "Asset",
//   },
//   {
//     accessorKey: "contextualRisk",
//     header: "Contextual Risk",
//   }
// ]import { ColumnDef } from "@tanstack/react-table"
import { Badge } from "@/components/ui/badge"
import { ColumnDef } from "@tanstack/react-table"

type Row = {
    id: string
    asset: number
    contextualRisk: string
}

export const columns: ColumnDef<Row>[] = [
    {
        accessorKey: "asset",
        header: "Asset"
    },
    {
        accessorKey: "contextualRisk",
        header: "Contextual Risk",
        cell: ({ row }) => {
            const value = row.getValue("contextualRisk") as string

            const variantMap: Record<string, { text: string; className: string }> = {
                critical: { text: "Critical", className: "bg-red-100 text-red-700" },
                high: { text: "High", className: "bg-orange-100 text-orange-700" },
                medium: { text: "Medium", className: "bg-yellow-100 text-yellow-700" },
                low: { text: "Low", className: "bg-green-100 text-green-700" },
                pending: { text: "Pending", className: "bg-gray-100 text-gray-700" }
            }

            const badge = variantMap[value.toLowerCase()] ?? {
                text: value,
                className: "bg-muted text-muted-foreground"
            }

            return (
                <Badge className={`rounded-full px-3 py-1 text-sm ${badge.className}`}>
                    {badge.text}
                </Badge>
            )
        }
    },

]
