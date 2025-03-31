import { Card, CardContent } from "@/components/ui/card";

export default function RiskSummary() {
  return (
    <Card className="w-48 flex items-center justify-center">
      <CardContent className="text-center">
        <p className="text-sm text-muted-foreground">Contextual Risk</p>
        <div className="text-3xl font-bold text-red-600 mt-2">2</div>
        <div className="text-xs mt-3 space-y-1">
          <p>2 Critical</p>
          <p>0 High</p>
          <p>0 Medium</p>
          <p>0 Low</p>
        </div>
      </CardContent>
    </Card>
  );
}
