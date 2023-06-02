import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import Data from "../../data.json";
import { useState, useCallback } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const MuiGrid = () => {
  const [rows, setRows] = useState(Data);

  const deleteUser = useCallback(
    (id) => () => {
      setTimeout(() => {
        setRows((prevRows) => prevRows.filter((row) => row.id !== id));
      });
    },
    []
  );

  const columns = [
    { field: "id", type: "number", headerName: "Id", width: 150 },
    { field: "name", type: "string", headerName: "Name", width: 150 },
    { field: "job", type: "string", headerName: "Job", width: 150 },
    { field: "bio", type: "string", headerName: "Bio", width: 150 },
    {
      field: "email",
      type: "singleSelect",
      valueOptions: ["Email"],
      width: 150,
    },
    { field: "dial", type: "string", headerName: "Dial", width: 150 },
    { field: "meeting", type: "string", headerName: "Meeting", width: 150 },
    { field: "phone", headerName: "Phone", width: 150 },
    { field: "birthday", headerName: "Birthday", width: 150 },
    {
      field: "actions",
      type: "actions",
      width: 80,
      getActions: (params) => [
        <GridActionsCellItem
          icon={<DeleteIcon />}
          label="Delete"
          onClick={deleteUser(params.id)}
        />,
      ],
    },
  ];

  return (
    <div style={{ height: 700, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        getRowHeight={() => "auto"}
        slots={{
          toolbar: GridToolbar,
        }}
      />
    </div>
  );
};

export default MuiGrid;
