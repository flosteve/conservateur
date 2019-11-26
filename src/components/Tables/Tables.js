import React from "react";
import StarIcon from "@material-ui/icons/Star";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Grid
} from "@material-ui/core";

const dataTableValues = [
  {
    nom: "Carmingnac Emerging Pat. E",
    star: 4,
    quantalys: 2,
    category: "OPC",
    srri: 3,
    perfY: 8.43,
    perfN: 8.43,
    perf3: 8.43,
    doc: "https://...."
  },
  {
    nom: "Conservateur Horizon 2025 C",
    star: 2,
    quantalys: 4,
    category: "OPC",
    srri: 4,
    perfY: 5.63,
    perfN: 5.63,
    perf3: 5.63,
    doc: "https://...."
  },
  {
    nom: "Oblivalor C",
    star: 2,
    quantalys: 4,
    category: "OPC",
    srri: 4,
    perfY: 5.63,
    perfN: 5.63,
    perf3: 5.63,
    doc: "https://...."
  },
  {
    nom: "Pluvalor",
    star: 2,
    quantalys: 4,
    category: "OPC",
    srri: 4,
    perfY: 5.63,
    perfN: 5.63,
    perf3: 5.63,
    doc: "https://...."
  },
  {
    nom: "Pluvalor Premium D",
    star: 2,
    quantalys: 4,
    category: "OPC",
    srri: 4,
    perfY: 5.63,
    perfN: 5.63,
    perf3: 5.63,
    doc: "https://...."
  }
];

const Tables = () => {
  return (
    <Table className="table-main">
      <TableHead>
        <TableRow>
          <TableCell align="center" sortDirection="desc">
            <TableSortLabel direction="desc" active={true} className="active">
              Nom
            </TableSortLabel>
          </TableCell>
          <TableCell>
            <TableSortLabel direction="desc" active={true}>
              Morning Star
            </TableSortLabel>
          </TableCell>
          <TableCell align="center">
            <TableSortLabel direction="desc" active={true}>
              Quantalys
            </TableSortLabel>
          </TableCell>
          <TableCell align="center">
            <TableSortLabel direction="desc" active={true}>
              Cat.
            </TableSortLabel>
          </TableCell>
          <TableCell align="center">
            <TableSortLabel direction="desc" active={true}>
              SRRI
            </TableSortLabel>
          </TableCell>
          <TableCell align="center">
            <TableSortLabel direction="desc" active={true}>
              Perf. Ytd
            </TableSortLabel>
          </TableCell>
          <TableCell align="center">
            <TableSortLabel direction="desc" active={true}>
              Perf. N-1
            </TableSortLabel>
          </TableCell>
          <TableCell align="center">
            <TableSortLabel direction="desc" active={true}>
              Perf. 3 ans
            </TableSortLabel>
          </TableCell>
          <TableCell align="center">
            <TableSortLabel direction="desc" active={true}>
              Doc.
            </TableSortLabel>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {dataTableValues.map(row => {
          return (
            <TableRow>
              <TableCell>
                <Grid container>
                  <StarIcon />
                  <div>{row.nom}</div>
                </Grid>
              </TableCell>
              <TableCell className="table-stars">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </TableCell>
              <TableCell className="table-stars">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </TableCell>
              <TableCell>{row.category}</TableCell>
              <TableCell>{row.srri}</TableCell>
              <TableCell>{row.perfY}</TableCell>
              <TableCell>{row.perfN}</TableCell>
              <TableCell>{row.perf3}</TableCell>
              <TableCell>{row.doc}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default Tables;
