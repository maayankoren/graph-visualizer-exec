import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function DescriptionPanel() {
  return (
    <Card className="w-[420px]">
      <CardHeader>
        <CardTitle>Description</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm mb-4">
          טקסט תיאורי כלשהו...
        </p>

        <h4 className="text-green-600 font-semibold mb-2">Extra</h4>
        <p className="text-muted-foreground text-sm mb-4">
          מידע נוסף...
        </p>

        <div className="space-y-2 text-sm">
          <div className="flex justify-between"><span>Item</span><span>10/19/2017</span></div>
          <div className="flex justify-between"><span>Item</span><Badge>Yes</Badge></div>
        </div>
      </CardContent>
    </Card>
  );
}
