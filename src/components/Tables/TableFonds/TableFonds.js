import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Grid,
  Box,
  Link
} from "@material-ui/core";

import DocumentIcon from "../../../assets/icons/document.png";
import RechercheIcon from "../../../assets/icons/recherche-icone copie.png";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

import DataFixturesHeader from "../DataFixturesTablesHeader";
import DataFixturesRows from "../DataFixturesTablesRows";
import ModalFonds from "../../Modals/ModalFonds";

const TableFonds = () => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <Box className="table-root">
      <Table className="table-main">
        <TableHead>
          <TableRow>
            {DataFixturesHeader.map(column => (
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
          {DataFixturesRows.map(row => {
            return (
              <TableRow key={row.nom} onClick={handleClickOpen} hover>
                <TableCell align="center">
                  <Grid container className="favori-star-container">
                    <Link
                      href="!#"
                      className={
                        row.favoris ? "favoris star" : "pas-favoris star"
                      }
                    />
                    <Box className="favoris-title">{row.nom}</Box>
                  </Grid>
                </TableCell>
                <TableCell className="table-stars rating" align="center">
                  <Box className="morningStar" />
                  <Box className="morningStar" />
                  <Box className="morningStar" />
                  <Box className="morningStarEmpty" />
                  <Box className="morningStarEmpty" />
                </TableCell>
                <TableCell className="table-stars rating" align="center">
                  <Box className="morningStar" />
                  <Box className="morningStar" />
                  <Box className="morningStar" />
                  <Box className="morningStarEmpty" />
                  <Box className="morningStarEmpty" />
                </TableCell>
                <TableCell align="center">{row.category}</TableCell>
                <TableCell align="center">{row.srri}</TableCell>
                <TableCell align="center">{row.perfY}</TableCell>
                <TableCell align="center">{row.perfN}</TableCell>
                <TableCell align="center">{row.perf3}</TableCell>
                <TableCell className="table-stars doc" align="center">
                  <Link href="!#">
                    <img src={RechercheIcon} alt="loupe recherche" />
                  </Link>
                  <Link href="!#">
                    <img src={DocumentIcon} alt="document" />
                  </Link>
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

export default TableFonds;
