import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { DataTable } from "../DataTable";
import { columns } from "../Columns"

export default function RiskPanel() {
type Asset = {
  name: string
  ip: string
  risk: string
}


const data: Asset[] = [
  { name: "Loremipsumdolorsit", ip: "192.168.1.1", risk: "Critical" },
  { name: "Loremipsumdolorsit002", ip: "192.168.1.2", risk: "Critical" },
]

  return (
    <Card className="flex-1">
      <DataTable columns={columns} data={data}/>
    </Card>
  );
}
