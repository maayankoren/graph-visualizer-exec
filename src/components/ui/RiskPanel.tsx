import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function RiskPanel() {
  return (
    <Card className="flex-1">
      <CardHeader>
        <CardTitle>Risks</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 text-sm">
        <div className="flex justify-between">
          <div>
            <div className="font-medium">Device A</div>
            <div className="text-xs text-muted-foreground">192.168.1.1</div>
          </div>
          <Badge variant="destructive">Critical</Badge>
        </div>
        <div className="flex justify-between">
          <div>
            <div className="font-medium">Device B</div>
            <div className="text-xs text-muted-foreground">192.168.1.2</div>
          </div>
          <Badge variant="destructive">Critical</Badge>
        </div>
      </CardContent>
    </Card>
  );
}
