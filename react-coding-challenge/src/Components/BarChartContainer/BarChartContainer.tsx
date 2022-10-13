import { Card, CardContent } from "@mui/material";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { AttributeCount } from "../../Models/PlanningCount";

interface BarChartProps {
  name: string;
  data: AttributeCount[];
  horizontal?: boolean;
}

function BarChartContainer(props: BarChartProps) {
  let options: ApexOptions = {
    chart: {
      id: "basic-bar",
      background: "white",
    },
    plotOptions: {
      bar: {
        distributed: true,
        horizontal: props.horizontal,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      title: {
        text: props.horizontal ? "Total" : "",
        style: {
          fontSize: "18px",
          fontWeight: "400",
        },
      },
      categories: props.data.map((item: AttributeCount) => item.key),
      labels: {
        style: {
          colors: "black",
        },
      },
    },
    yaxis: {
      title: {
        text: props.horizontal ? "" : "Total",
        style: {
          fontSize: "18px",
          fontWeight: "400",
        },
      },
      labels: {
        style: {
          colors: "black",
        },
      },
    },
  };

  const series = [
    {
      name: "Total",
      data: props.data.map((item: AttributeCount) => item.value),
    },
  ];

  return (
    <Card
      sx={{
        minWidth: 275,
        minHeight: 750,
        background: "white",
        height: "100%",
      }}
    >
      <CardContent style={{ height: "100%" }}>
        <h1 style={{ color: "orange" }}>{props.name}</h1>
        <Chart options={options} series={series} type="bar" height="80%" />
      </CardContent>
    </Card>
  );
}

export default BarChartContainer;
