import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

import DiagramPanelExtra from "../diagramPanel/DiagramPanelExtra";
import RiskSummary from "./RiskSummery";
import RiskPanel from "./RiskPanel";

export default function MainRiskPanel() {

const data = [
    { name: "Critical", value: 2, color: "#B91C1C" },
    { name: "High", value: 0, color: "#DC2626" },
    { name: "Medium", value: 0, color: "#FACC15" },
    { name: "Low", value: 0, color: "#22C55E" },
  ]

  return (
    <Card className="border-none flex flex-col " >
          <CardContent className="flex flex-col gap-3 ">
            <CardHeader>
              <CardTitle className="text-green-600 font-semibold mb-2">Lorem Lorem Lorem</CardTitle>
            </CardHeader>
            <DiagramPanelExtra/>
            <div className="flex flex-col ">

            <CardHeader>
              <CardTitle className="text-green-600 font-semibold mb-2">Lorem Lorem Lorem</CardTitle>
            </CardHeader>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <RiskPanel />
                <RiskSummary data={data} />
              </div>
            </div>
          </CardContent>
        </Card>
  );
}
