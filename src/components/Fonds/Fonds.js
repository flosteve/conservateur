import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";

import Layout from "../Layout/Layout";

import fonds from "../../assets/icons/fonds-disponibles-icone.png";
import TableFonds from "../Tables/TableFonds/TableFonds";

const Fonds = () => {
  return (
    <Layout>
      <Grid container>
        <Box className="title-logo">
          <img src={fonds} alt="fonds disponibles" />
        </Box>
        <Box>
          <Typography component="h1" variant="h1">
            Consultez tous <br />
            <span>les fonds disponibles</span>
          </Typography>
        </Box>
      </Grid>
      <Grid container>
        <TableFonds />
      </Grid>
    </Layout>
  );
};

export default Fonds;
