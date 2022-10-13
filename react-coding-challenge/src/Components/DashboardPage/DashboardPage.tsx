import { Box, Grid } from "@mui/material";
import { AttributeCount, PlanningCount } from "../../Models/PlanningCount";
import AnalyticsCard from "../AnalyticsCard/AnalyticsCard";
import BarChartContainer from "../BarChartContainer/BarChartContainer";
import PieChartContainer from "../PieChartContainer/PieChartContainer";
import "./DashboardPage.css";

interface DashboardProps {
  data: PlanningCount;
}

function DashboardPage(props: DashboardProps) {
  return (
    <Box sx={{ flexGrow: 1 }} className="Analytics">
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <AnalyticsCard
            title="Total Cities with offices"
            description={props.data.officeCityCount.length.toString()}
          />
        </Grid>
        <Grid item xs={3}>
          <AnalyticsCard
            title="City with least offices"
            description={
              props.data.officeCityCount.sort(function (
                a: AttributeCount,
                b: AttributeCount
              ) {
                return b.value - a.value;
              })[props.data.officeCityCount.length - 1].key
            }
          />
        </Grid>
        <Grid item xs={3}>
          <AnalyticsCard
            title="Total Industries"
            description={props.data.industryCount.length.toString()}
          />
        </Grid>
        <Grid item xs={3}>
          <AnalyticsCard
            title="Least popular industry"
            description={
              props.data.industryCount.sort(function (
                a: AttributeCount,
                b: AttributeCount
              ) {
                return b.value - a.value;
              })[props.data.industryCount.length - 1].key
            }
          />
        </Grid>

        <Grid item xs={7}>
          <BarChartContainer
            data={props.data.skillsCount}
            name={"Skills"}
            horizontal
          />
        </Grid>
        <Grid item xs={5}>
          <PieChartContainer
            data={props.data.gradingCount}
            name={"Booking Grades"}
          />
        </Grid>
        <Grid item xs={6}>
          <BarChartContainer
            data={props.data.industryCount.slice(0, 10)}
            name={"Top 10 Industries"}
          />
        </Grid>

        <Grid item xs={6}>
          <BarChartContainer
            data={props.data.officeCityCount.slice(0, 10)}
            name={"Top 10 Cities"}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default DashboardPage;
