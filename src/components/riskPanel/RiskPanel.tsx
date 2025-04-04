import { Card} from "@/components/ui/card";
import { DataTable } from "../table/DataTable";
import { columns } from "../table/Columns"
import { Asset } from "@/types/Assets";

export default function RiskPanel() {

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
