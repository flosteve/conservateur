import React from "react";
import Layout from "../Layout/Layout";
import fonds from "../../assets/icons/fonds-disponibles-icone.png";
import { Grid, Typography } from "@material-ui/core";
import TablesFonds from "../Tables/TableFonds/TablesFonds";

const Fonds = () => {
  return (
    <Layout>
      <Grid container>
        <div className="title-logo">
          <img src={fonds} alt="fonds disponibles" />
        </div>
        <div>
          <Typography component="h1" variant="h1">
            Consultez tous <br />
            <span>les fonds disponibles</span>
          </Typography>
        </div>
      </Grid>
      <Grid container>
        <TablesFonds />
      </Grid>
    </Layout>
  );
};

export default Fonds;
