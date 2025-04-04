import { RiskCircleProps } from "@/types/RiskCircleProps"

export default function RiskCircle({ icon: Icon, color, label }: RiskCircleProps) {
  return (
    <div className="flex items-center gap-2">
      <div
        className="rounded-full w-8 h-8 flex items-center justify-center gap-10"
        style={{ backgroundColor: color }}
      >
        <Icon color="white" className="w-4 h-4" />
      </div>
      <span className="text-sm font-semibold" style={{ color }}>
        {label}
      </span>
    </div>
  )
}
