import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Planning } from "../../Models/Planning";
import "./DrawerDetails.css";

interface DrawerDetailsProps {
  row: Planning;
}

function DrawerDetails(props: DrawerDetailsProps) {
  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Name",
      flex: 1,
    },
    {
      field: "category",
      headerName: "Category",
      flex: 1,
    },
  ];

  return (
    <div className="Drawer">
      <h1 className="Title"> Details</h1>
      <div className="Box">
        <h1 className="Entry"> ID: {props.row.id}</h1>
        <h1 className="Entry"> Original ID: {props.row.originalId}</h1>
        <h1 className="Entry"> Client ID: {props.row.clientId}</h1>
        {props.row.clientName && (
          <h1 className="Entry"> Client Name: {props.row.clientName}</h1>
        )}
        {props.row.jobManagerName && (
          <h1 className="Entry">
            {" "}
            Job Manager Name: {props.row.jobManagerName}
          </h1>
        )}
        {props.row.jobManagerId && (
          <h1 className="Entry"> Job Manager ID: {props.row.jobManagerId}</h1>
        )}
        <h1 className="Entry"> Operating Unit: {props.row.operatingUnit}</h1>
        <h1 className="Entry">
          {" "}
          Office Postal Code: {props.row.officePostalCode}
        </h1>
        <h1 className="Entry"> Total Hours: {props.row.totalHours}</h1>
        <h1 className="Entry">
          {" "}
          Start Date: {new Date(props.row.startDate).toLocaleDateString()}
        </h1>
        <h1 className="Entry">
          {" "}
          End Date: {new Date(props.row.endDate).toLocaleDateString()}
        </h1>
        {props.row.talentId && (
          <h1 className="Entry"> Talent ID: {props.row.talentId}</h1>
        )}
        {props.row.talentName && (
          <h1 className="Entry"> Talent Name: {props.row.talentName}</h1>
        )}
        {props.row.talentGrade && (
          <h1 className="Entry"> Talent Grade: {props.row.talentGrade}</h1>
        )}
        {props.row.bookingGrade && (
          <h1 className="Entry"> Booking Grade: {props.row.bookingGrade}</h1>
        )}
        {props.row.officeCity && (
          <h1 className="Entry"> Office City: {props.row.officeCity}</h1>
        )}
        {props.row.officePostalCode && (
          <h1 className="Entry">
            {" "}
            Office Postal Code: {props.row.officePostalCode}
          </h1>
        )}
        {props.row.industry && (
          <h1 className="Entry" style={{ marginBottom: 60 }}>
            {" "}
            Industry: {props.row.industry}
          </h1>
        )}
        {props.row.requiredSkills!.length > 0 && (
          <div>
            <h1 className="Entry" style={{ border: 0 }}>
              {" "}
              Required Skills:
            </h1>
            <DataGrid
              autoHeight
              className="DataGrid"
              style={{ marginBottom: 40 }}
              rows={props.row.requiredSkills!}
              rowsPerPageOptions={[10]}
              columns={columns}
              getRowId={(row) => row.name + row.category}
            />
          </div>
        )}
        {props.row.optionalSkills!.length > 0 && (
          <div>
            <h1 className="Entry" style={{ border: 0 }}>
              {" "}
              Optional Skills:
            </h1>
            <DataGrid
              autoHeight
              className="DataGrid"
              rows={props.row.optionalSkills!}
              rowsPerPageOptions={[10]}
              columns={columns}
              getRowId={(row) => row.name + row.category}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default DrawerDetails;
