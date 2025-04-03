
import DescriptionPanel from "@/components/DescriptionPanel"
import DiagramPanel from "@/components/DiagramPanel"
import RiskPanel from "@/components/riskPanel/RiskPanel"
import RiskSummary from "@/components/riskPanel/RiskSummery"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ShieldX } from "lucide-react"

const data = [
  { name: "Critical", value: 2, color: "#B91C1C" },
  { name: "High", value: 0, color: "#DC2626" },
  { name: "Medium", value: 0, color: "#FACC15" },
  { name: "Low", value: 0, color: "#22C55E" },
]

export default function Page() {
  return (
    <div className="flex flex-1 flex-col px-4 py-6 md:px-8 md:py-8 bg-[#FAFAFA]">
      <div className="grid gap-6 lg:grid-cols-[1fr_2fr]">

        <div className="flex flex-col gap-5 border-none">
          <DescriptionPanel />
        </div>

        <Card className="border-none">
          <CardContent className="flex flex-col gap-5 ">
            <h2 className="text-xl font-semibold text-green-700 px-2">
              Lorem Lorem Lorem
            </h2>
            <Card className="shadow-none border-none overflow-hidden bg-[#FAFAFA] ">
              <CardContent>
                <DiagramPanel />
                <Separator className="my-4 w-[90%] mx-auto bg-gray-200" />
                {/* #e5372b */}
                {/* #00983e */}
                <div className="h-[20%] flex gap-6">
                  <div className="rounded-full bg-[#FF9500] w-10 h-10 flex items-center justify-center"> <ShieldX color='white' /></div>

                  <ShieldX />
                  <ShieldX />
                </div>
                {/* לג'נד */}
                {/* <div className="flex justify-center gap-6">
          <Legend color="red" label="Lorem" />
          <Legend color="orange" label="Lorem" />
          <Legend color="green" label="Lorem" />
        </div> */}
              </CardContent>
            </Card>
            <div className="flex flex-col gap-6">
              <h2 className="text-xl font-semibold text-green-700 px-2">
                Lorem Ipsum Dolor Sit
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <RiskPanel />
                <RiskSummary data={data} />
              </div>
            </div>

          </CardContent>
        </Card>
      </div>
    </div>

  )
}
