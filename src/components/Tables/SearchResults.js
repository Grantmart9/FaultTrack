import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { Fade } from "@material-ui/core";
import { SaveButtonStyle, Background1 } from "components/Display/feutures";

export const SearchResults = () => {
    function createData(Date, Site, Technician, Status) {
      return { Date, Site, Technician, Status };
    }

    const rows = [
      createData("Wed 14 Aug", "Kannonkop", "Grant Marthinus", "Completed"),
      createData("Wed 13 Aug", "Kannonkop", "Grant Marthinus", "Incomplete"),
      createData("Wed 12 Aug", "Kannonkop", "Grant Marthinus", "Completed"),
      createData("Wed 11 Aug", "Kannonkop", "Grant Marthinus", "Completed"),
      createData("Wed 10 Aug", "Kannonkop", "Grant Marthinus", "Completed"),
      createData("Wed 9 Aug", "Kannonkop", "Grant Marthinus", "Completed"),
      createData("Wed 8 Aug", "Kannonkop", "Grant Marthinus", "Incomplete"),
      createData("Wed 14 Aug", "Kannonkop", "Grant Marthinus", "Completed"),
      createData("Wed 14 Aug", "Kannonkop", "Grant Marthinus", "Completed"),
      createData("Wed 14 Aug", "Kannonkop", "Grant Marthinus", "Incomplete"),
      createData("Wed 15 Aug", "Kannonkop", "Grant Marthinus", "Completed"),
      createData("Wed 18 Aug", "Kannonkop", "Grant Marthinus", "Incomplete"),
      createData("Wed 17 Aug", "Kannonkop", "Grant Marthinus", "Completed"),
      createData("Wed 19 Aug", "Kannonkop", "Grant Marthinus", "Incomplete"),
      createData("Wed 1 Aug", "Kannonkop", "Grant Marthinus", "Completed"),
    ];

    return (
      <div
        style={{ backgroundColor: Background1, opacity: "80%" }}
        className="rounded-md p-1 shadow-md mt-2"
      >
        <Fade in={true} timeout={600}>
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell align="left">Site</TableCell>
                  <TableCell align="left">Technician</TableCell>
                  <TableCell align="left">Status</TableCell>
                  <TableCell align="left">Sheet</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="left">{row.Date}</TableCell>
                    <TableCell align="left">{row.Site}</TableCell>
                    <TableCell align="left">{row.Technician}</TableCell>
                    <TableCell align="left">{row.Status}</TableCell>
                    <TableCell align="left">
                      <Button sx={SaveButtonStyle}>Sheets</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Fade>
      </div>
    );
  };