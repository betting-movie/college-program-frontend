import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  makeStyles,
} from "@mui/material";

const columns = [
  { id: "property", label: "Property", minWidth: 170 },
  { id: "value", label: "Value", minWidth: 100 },
];

// const useStyles = makeStyles({
//   table: {
//     minWidth: 300,
//   },
// });

const CollegeTable = ({ data }) => {
  //   const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table style={{ minWidth: "300px" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={column.id}
                align="left"
                style={{
                  minWidth: column.minWidth,
                  fontWeight: "600",
                  fontSize: "20px",
                }}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody style={{ fontSize: "16px" }}>
          {Object.entries(data).map(([key, value]) => (
            <TableRow key={key}>
              <TableCell component="th" scope="row">
                {key}
              </TableCell>
              <TableCell align="left">
                {Array.isArray(value) ? value.join(", ") : value}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export const MemoizedCollegeTable = React.memo(CollegeTable);
