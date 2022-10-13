import { Card, CardContent } from "@mui/material";
import "./AnalyticsCard.css";

interface AnalyticsCardProps {
  title: string;
  description: string;
}

function AnalyticsCard(props: AnalyticsCardProps) {
  return (
    <Card className="Card">
      <CardContent>
        <h2 style={{ textAlign: "left", fontWeight: 500, fontSize: "1em" }}>
          {props.title}
        </h2>
        <h1 style={{ fontSize: "2.5em", fontWeight: 600, color: "orange" }}>
          {props.description}
        </h1>
      </CardContent>
    </Card>
  );
}

export default AnalyticsCard;
