import { Card, CardContent } from "../ui/card";
import { Separator } from "@/components/ui/separator"
import RiskCircle from "@/components/ui/RiskCircle"
import { ShieldX, ShieldCheck } from "lucide-react"
import DiagramPanel from "./DiagramPanel";

const risks = [
    { icon: ShieldX, color: "#FF9500", label: "Lorem" },
    { icon: ShieldX, color: "#e5372b", label: "Lorem" },
    { icon: ShieldCheck, color: "#00983e", label: "Lorem" },
  ]
export default function DiagramPanelExtra() {

    return (
        <Card className="shadow-none border-none overflow-hidden bg-[#FAFAFA] ">
            <CardContent>
                <DiagramPanel />
                <Separator className="my-4 w-[90%] mx-auto bg-gray-200" />
                <div className="flex gap-4 ml-12 ">
                    {risks.map((item, i) => (
                        <RiskCircle key={i} icon={item.icon} color={item.color} label={item.label} />
                    ))}
                </div>
            </CardContent>
        </Card>)
}