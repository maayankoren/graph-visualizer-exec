// components/ui/RiskCircle.tsx
import { LucideIcon } from "lucide-react"

type RiskCircleProps = {
  icon: LucideIcon
  color: string
}

export default function RiskCircle({ icon: Icon, color }: RiskCircleProps) {
  return (
    <div
      className="rounded-full w-10 h-10 flex items-center justify-center"
      style={{ backgroundColor: color }}
    >
      <Icon color="white" className="w-5 h-5" />
    </div>
  )
}
