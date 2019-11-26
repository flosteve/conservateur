import React from "react";
import StarIcon from "@material-ui/icons/Star";
import documentIcon from "../../assets/icons/document.png";
import rechercheIcon from "../../assets/icons/recherche-icone copie.png";
import starYellowIcon from "../../assets/icons/etoile-jaune.png";
import starYellowEmptyIcon from "../../assets/icons/etoile-jaune-vide.png";
import starSecondaryIcon from "../../assets/icons/etoile-pleine copie-secondaire.png";
import starSecondaryEmptyIcon from "../../assets/icons/etoile-vide-secondaire.png";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

import Data from "./customDataTables";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Grid
} from "@material-ui/core";

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
        {Data.map(row => {
          return (
            <TableRow>
              <TableCell>
                <Grid container>
                  <div className={row.favoris ? "favoris" : "pas-favoris"} />
                  <div>{row.nom}</div>
                </Grid>
              </TableCell>
              <TableCell className="table-stars rating">
                <div className="morningStar" />
                <div className="morningStar" />
                <div className="morningStar" />
                <div className="morningStarEmpty" />
                <div className="morningStarEmpty" />
              </TableCell>
              <TableCell className="table-stars rating">
                <div className="morningStar" />
                <div className="morningStar" />
                <div className="morningStar" />
                <div className="morningStarEmpty" />
                <div className="morningStarEmpty" />
              </TableCell>
              <TableCell>{row.category}</TableCell>
              <TableCell>{row.srri}</TableCell>
              <TableCell>{row.perfY}</TableCell>
              <TableCell>{row.perfN}</TableCell>
              <TableCell>{row.perf3}</TableCell>
              <TableCell className="table-stars doc">
                <a href="#">
                  <img src={rechercheIcon} alt="loupe recherche" />
                </a>
                <a href="#">
                  <img src={documentIcon} alt="document" />
                </a>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default Tables;
