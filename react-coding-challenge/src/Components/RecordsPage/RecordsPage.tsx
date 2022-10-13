import { Autocomplete, Button, Drawer, TextField } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { Planning } from "../../Models/Planning";
import DrawerDetails from "../DrawerDetails/DrawerDetails";
import "./RecordsPage.css";

interface RecordProps {
  data: Planning[];
}

interface Filter {
  name: string;
  value: string;
}

function RecordsPage(props: RecordProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<Planning>();
  const [selectedFilter, setSelectedFilter] = useState<Filter>();
  const [selectedOption, setSelectedOption] = useState<any>([]);
  const [searchValue, setSearchValue] = useState("");
  const [tableData, setTableData] = useState<Planning[]>(props.data);

  useEffect(() => {
    if (selectedFilter !== undefined) {
      let option = props.data.map((item) => {
        return item[selectedFilter!.value as keyof Planning];
      });
      option = option.filter(function (value, index) {
        return option.indexOf(value) === index && value !== "";
      });
      setSelectedOption(option);
    } else {
      setSelectedOption([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFilter]);

  useEffect(() => {
    if (searchValue !== "") {
      let newData = props.data.filter(
        (item) =>
          item[selectedFilter!.value as keyof Planning]!.toString() ===
          searchValue
      );

      setTableData(newData);
    } else {
      setTableData(props.data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  const filters: Filter[] = [
    {
      name: "ID",
      value: "id",
    },
    { name: "Original ID", value: "originalId" },
    { name: "Talent ID", value: "talentId" },
    { name: "Talent Name", value: "talentName" },
    { name: "Talent Grade", value: "talentGrade" },
    { name: "Booking Grade", value: "bookingGrade" },
    { name: "Operating Unit", value: "operatingUnit" },
    { name: "Office City", value: "officeCity" },
    { name: "Office Postal Code", value: "officePostalCode" },
    { name: "Job Manager Name", value: "jobManagerName" },
    { name: "Job Manager ID", value: "jobManagerId" },
    { name: "Start Date", value: "startDate" },
    { name: "End Date", value: "endDate" },
    { name: "Client ID", value: "clientId" },
    { name: "Client Name", value: "clientName" },
    { name: "Industry", value: "industry" },
    { name: "Is Unassigned", value: "isUnassigned" },
  ];

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      flex: 1,
      maxWidth: 100,
      headerClassName: "ColumnHeader",
    },
    {
      field: "originalId",
      headerName: "Original ID",
      flex: 1,
      headerClassName: "ColumnHeader",
    },
    {
      field: "clientId",
      headerName: "Client",
      flex: 1,
      maxWidth: 200,
      headerClassName: "ColumnHeader",
      renderCell: (params) => {
        return (
          <div>
            <h1 className="Cell">ID: {params.row.clientId}</h1>
            <h1 className="Cell">Name: {params.row.clientName}</h1>
          </div>
        );
      },
    },
    {
      field: "jobManagerId",
      headerName: "Manager",
      maxWidth: 400,
      flex: 1,
      headerClassName: "ColumnHeader",
      renderCell: (params) => {
        return (
          <div>
            <h1 className="Cell">ID: {params.row.jobManagerId}</h1>
            <h1 className="Cell">Name: {params.row.jobManagerName}</h1>
          </div>
        );
      },
    },
    {
      field: "operatingUnit",
      headerName: "Operating Unit",
      flex: 1,
      headerClassName: "ColumnHeader",
    },
    {
      field: "officePostalCode",
      headerName: "Office",
      flex: 1,
      headerClassName: "ColumnHeader",
      renderCell: (params) => {
        return (
          <div>
            <h1 className="Cell">City: {params.row.officeCity}</h1>
            <h1 className="Cell">Postal Code: {params.row.officePostalCode}</h1>
          </div>
        );
      },
    },
    {
      field: "totalHours",
      headerName: "Time Spent",
      flex: 1,
      headerClassName: "ColumnHeader",
      renderCell: (params) => {
        return (
          <div>
            <h1 className="Cell">Total Hours: {params.row.totalHours}</h1>
            <h1 className="Cell">Start Date: {params.row.startDate}</h1>
            <h1 className="Cell">End Date: {params.row.endDate}</h1>
          </div>
        );
      },
    },
    {
      field: "isUnassigned",
      headerName: "Is Assigned",
      flex: 1,
      headerClassName: "ColumnHeader",
      renderCell: (params) => {
        return (
          <div>
            <h1 className="Cell" style={{ marginLeft: 20 }}>
              {params.row.isUnassigned === false ? "True" : "False"}
            </h1>
          </div>
        );
      },
    },
    {
      field: "button",
      headerName: "",
      flex: 1,
      maxWidth: 150,
      renderCell: (params) => {
        const onClick = (e: any) => {
          e.stopPropagation();
          setSelectedRow(props.data[Number(params.id) - 1]);
          setIsDrawerOpen(true);
        };

        return (
          <Button className="Button" onClick={onClick}>
            Details
          </Button>
        );
      },
    },
  ];

  return (
    <React.Fragment>
      <div className="Records">
        <div
          style={{
            display: "flex",
            gap: 20,
            width: "100%",
            justifyContent: "center",
            marginBottom: 30,
          }}
        >
          <Autocomplete
            disablePortal
            style={{ background: "white", width: 250 }}
            options={filters.map((filter) => {
              return filter.name;
            })}
            sx={{ width: 300 }}
            onChange={(event, value) => {
              if (value !== null) {
                setSelectedFilter(
                  filters.find((item) => item.name === value!)!
                );
              } else {
                setSelectedFilter(undefined);
              }
              setSearchValue("");
            }}
            renderInput={(params) => <TextField {...params} label="Filter" />}
          />
          <Autocomplete
            freeSolo
            disableClearable
            style={{ background: "white", width: "80%" }}
            options={selectedOption}
            disabled={selectedFilter === undefined}
            onChange={(event, value) => {
              if (value !== null) {
                setSearchValue(String(value));
              } else {
                setSearchValue("");
              }
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search"
                InputProps={{
                  ...params.InputProps,
                  type: "search",
                }}
              />
            )}
          />
        </div>

        <DataGrid
          autoHeight
          className="DataGrid"
          rows={tableData}
          columns={columns}
          rowHeight={150}
          pageSize={50}
          rowsPerPageOptions={[50]}
        />
      </div>
      <Drawer
        anchor={"right"}
        open={isDrawerOpen}
        onClose={() => {
          setIsDrawerOpen(false);
        }}
      >
        <DrawerDetails row={selectedRow!} />
      </Drawer>
    </React.Fragment>
  );
}

export default RecordsPage;
