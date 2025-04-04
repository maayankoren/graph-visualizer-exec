
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const tableData = [
  { label: "Lorem Ipsum Dolor", value: "10/19/2017" },
  { label: "Lorem Ipsum Dolor", value: "Ut" },
  { label: "Lorem Ipsum Dolor", value: "Eros" },
  {
    label: "Lorem Ipsum Dolor",
    value: (
      <div className="flex items-center gap-1 text-green-600">
        <Check className="w-4 h-4" />
        Yes
      </div>
    ),
  },
  { label: "Lorem Ipsum Dolor", value: "Sit" },
  { label: "Lorem Ipsum Dolor", value: "Lorem Ipsum Dolor" },
  { label: "Lorem Ipsum Dolor", value: "Lorem Ipsum Dolor" },
]

function InfoTable() {
  return (
    <div className="space-y-4">
      {tableData.map((item, i) => (
        <div key={i} className="flex justify-between text-sm py-2">
          <span className="font-semibold text-gray-800">{item.label}</span>
          <span className="text-gray-600">{item.value}</span>
        </div>
      ))}
    </div>
  )
}

export default function DescriptionPanel() {
  return (
    <Card className="h-full border-none">
      <CardHeader>
        <CardTitle className="text-green-600 font-semibold mb-2">Description</CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* main desc*/}
        <p className="text-muted-foreground text-sm leading-[2]">
          טקסט טקסטטקסט  טקסט טקסט טקסט טקסט טקסט
          טקסט טקסטטקסט  טקסט טקסט טקסט טקסט טקסט
          טקסט טקסטטקסט  טקסט טקסט טקסט טקסט טקסט
          טקסט טקסטטקסט  טקסט טקסט טקסט טקסט טקסט
          Lorem ispam Lorem ispamLorem ispamLorem ispamLorem
          Lorem ispam Lorem ispamLorem ispamLorem ispamLorem
          Lorem ispam Lorem ispamLorem ispamLorem ispamLorem
        </p>

        {/* Extra */}
        <div>
          <CardTitle className="text-green-600 font-semibold mb-2">Extra</CardTitle>
          <p className="text-muted-foreground text-sm leading-[2]">
            טקסט טקסטטקסט  טקסט טקסט טקסט טקסט טקסט
            טקסט טקסטטקסט  טקסט טקסט טקסט טקסט טקסט
            טקסט טקסטטקסט  טקסט טקסט טקסט טקסט טקסט
            טקסט טקסטטקסט  טקסט טקסט טקסט טקסט טקסט
            Lorem ispam Lorem ispamLorem ispamLorem ispamLorem
            Lorem ispam Lorem ispamLorem ispamLorem ispamLorem
            Lorem ispam Lorem ispamLorem ispamLorem ispamLorem
          </p>
        </div>

        <Separator className="my-4 w-[90%] mx-auto bg-gray-200" />

        {/* table */}
        <InfoTable />
      </CardContent>
    </Card>
  );
}
