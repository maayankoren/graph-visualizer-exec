
import DescriptionPanel from "@/components/descriptionPanel/DescriptionPanel"
import MainRiskPanel from "@/components/riskPanel/MainRiskPanel"


export default function Page() {
  return (
    <div className="flex flex-1 flex-col px-4 py-4 md:px-8 bg-[#FAFAFA] ">
      <div className="grid gap-6 lg:grid-cols-[1fr_2fr]">
        <div className="flex flex-col gap-3 border-none overflow-y-auto pr-2">
          <DescriptionPanel />
        </div>
        <div>
          <MainRiskPanel />
        </div>
      </div>
    </div>

  )
}
