import React from "react";
import documentIcon from "../../../assets/icons/document.png";
import rechercheIcon from "../../../assets/icons/recherche-icone copie.png";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

import DataHeader from "../customDataTablesHeader";
import DataRows from "../customDataTablesRows";
import ModalFonds from "../../Modals/ModalFonds";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Grid,
  Box,
  Link,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText
} from "@material-ui/core/index";

const TablesFonds = () => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <Box className="table-root">
      <Table className="table-main">
        <TableHead>
          <TableRow hover>
            {DataHeader.map(column => (
              <TableCell key={column.nom} align="center" sortDirection="desc">
                <TableSortLabel
                  direction={column.direction}
                  active={column.active}
                  IconComponent={ArrowDropDownIcon}
                  className={column.className}
                  href={column.href}
                >
                  {column.nom}
                </TableSortLabel>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {DataRows.map(row => {
            return (
              <TableRow key={row.nom} onClick={handleClickOpen} hover>
                <TableCell align="center">
                  <Grid container>
                    <div className={row.favoris ? "favoris" : "pas-favoris"} />
                    <div>{row.nom}</div>
                  </Grid>
                </TableCell>
                <TableCell className="table-stars rating" align="center">
                  <div className="morningStar" />
                  <div className="morningStar" />
                  <div className="morningStar" />
                  <div className="morningStarEmpty" />
                  <div className="morningStarEmpty" />
                </TableCell>
                <TableCell className="table-stars rating" align="center">
                  <div className="morningStar" />
                  <div className="morningStar" />
                  <div className="morningStar" />
                  <div className="morningStarEmpty" />
                  <div className="morningStarEmpty" />
                </TableCell>
                <TableCell align="center">{row.category}</TableCell>
                <TableCell align="center">{row.srri}</TableCell>
                <TableCell align="center">{row.perfY}</TableCell>
                <TableCell align="center">{row.perfN}</TableCell>
                <TableCell align="center">{row.perf3}</TableCell>
                <TableCell className="table-stars doc" align="center">
                  <a href="!#">
                    <img src={rechercheIcon} alt="loupe recherche" />
                  </a>
                  <a href="!#">
                    <img src={documentIcon} alt="document" />
                  </a>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <ModalFonds open={open} setOpen={setOpen} />
    </Box>
  );
};

export default TablesFonds;
