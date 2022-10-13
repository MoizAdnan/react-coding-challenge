import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Planning } from "./Models/Planning";
import { Box, Tab, Tabs } from "@mui/material";
import DashboardPage from "./Components/DashboardPage/DashboardPage";
import { PlanningCount } from "./Models/PlanningCount";
import { getCount, getSkillsCount } from "./Utilities";
import RecordsPage from "./Components/RecordsPage/RecordsPage";

function App() {
  const [planningData, setPlanningData] = useState<Planning[]>([]);
  const [planningCount, setPlanningCount] = useState<PlanningCount>();
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    fetch("planning.json")
      .then((response) => response.json())
      .then((data) => {
        setPlanningData(data);
        setPlanningCount({
          gradingCount: getCount(data, "bookingGrade"),
          industryCount: getCount(data, "industry"),
          officeCityCount: getCount(data, "officeCity"),
          skillsCount: getSkillsCount(data),
        });
        setLoading(false);
      });
  }, []);

  if (loading === true) {
    return (
      <div className="App">
        <body className="App-loading">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Loading</h1>
        </body>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src="/logo.png" className="Logo" alt="logo" />
        <h1>Planner</h1>
        <Box className="App-navbar">
          <Tabs
            TabIndicatorProps={{ style: { background: "orange", height: 5 } }}
            value={value}
            onChange={handleChange}
            centered
          >
            <Tab
              className="App-tab"
              style={{
                color: value === 0 ? "orange" : "white",
                fontWeight: "bold",
                fontSize: "0.6em",
              }}
              label="Dashboard"
            />
            <Tab
              className="App-tab"
              style={{
                color: value === 1 ? "orange" : "white",
                fontWeight: "bold",
                fontSize: "0.6em",
              }}
              label="Records"
            />
          </Tabs>
        </Box>
      </header>

      {value === 0 && <DashboardPage data={planningCount!} />}
      {value === 1 && <RecordsPage data={planningData} />}
    </div>
  );
}

export default App;
