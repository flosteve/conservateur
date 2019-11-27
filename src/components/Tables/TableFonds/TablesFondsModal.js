import React from "react";

import DataHeaderModal from "../DataFixturesTablesHeaderModal";
import DataTablesRowsModal from "../DataFixturesTablesRowsModal";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Box
} from "@material-ui/core/index";

const TablesFonds = () => {
  return (
    <Box className="table-root">
      <Table className="table-main modal">
        <TableHead>
          <TableRow>
            {DataHeaderModal.map(column => (
              <TableCell key={column.nom} align="center" sortDirection="desc">
                {column.nom}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {DataTablesRowsModal.map(row => {
            return (
              <TableRow key={row.id}>
                <TableCell align="center">
                  <div>{row.perfY}</div>
                </TableCell>
                <TableCell align="center">
                  <div>{row.perf2018}</div>
                </TableCell>
                <TableCell align="center">
                  <div>{row.perf3a}</div>
                </TableCell>
                <TableCell align="center">
                  <div>{row.perf5a}</div>
                </TableCell>
                <TableCell align="center">
                  <div>{row.perf8a}</div>
                </TableCell>
                <TableCell align="center">
                  <div>{row.perf10a}</div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Box>
  );
};

export default TablesFonds;
