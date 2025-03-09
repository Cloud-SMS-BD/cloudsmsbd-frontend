import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, MessageCircle } from "lucide-react";
type AnalyticsCardProps = {
  analyticsData: {
    id: number;
    title: string;
    value: number | string;
  }[];
};
const AnalyticsCard: React.FC<AnalyticsCardProps> = ({ analyticsData }) => {
  return (
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      {analyticsData.map(({ id, title, value }) => (
        <Card key={id}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {id === 1 ? (
                <Activity className={`h-6 w-6 text-green-500`} />
              ) : (
                <MessageCircle className={`h-6 w-6 text-red-500`} />
              )}

              {title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">{value}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default AnalyticsCard;
