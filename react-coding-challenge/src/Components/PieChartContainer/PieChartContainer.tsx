import { Card, CardContent } from "@mui/material";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { AttributeCount } from "../../Models/PlanningCount";

interface PieChartProps {
  name: string;
  data: AttributeCount[];
}

function PieChartContainer(props: PieChartProps) {
  let options: ApexOptions = {
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            total: {
              show: true,
              fontSize: "30px",
              fontWeight: "bold",
              color: "black",
            },
            value: {
              color: "black",
              fontSize: "24px",
            },
          },
        },
      },
    },
    legend: {
      show: true,
      position: "bottom",
      labels: {
        colors: "black",
      },
    },
    labels: props.data.map((item: AttributeCount) => item.key),
  };

  return (
    <Card
      sx={{
        minWidth: 275,
        background: "white",
        width: "100%",
        height: "100%",
      }}
    >
      <CardContent style={{ width: "100%" }}>
        <h1 style={{ color: "orange" }}>{props.name}</h1>
        <Chart
          options={options}
          series={props.data.map((item: AttributeCount) => item.value)}
          type="donut"
          width={"100%"}
        />
      </CardContent>
    </Card>
  );
}

export default PieChartContainer;
