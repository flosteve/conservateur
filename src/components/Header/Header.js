import React from "react";
import { AppBar, Toolbar, Grid, IconButton, Link } from "@material-ui/core";
import logo from "../../assets/icons/logo-conservateur.png";
import connexion from "../../assets/icons/connexion.png";
import SearchBar from "../SearchBar/SearchBar";
import HeaderTabs from "../HeaderTabs/HeaderTabs";

const Header = () => {
  return (
    <AppBar position="static" className="header-top">
      <Toolbar className="header-container">
        <Grid container className="header-main-grid">
          <Grid item xs={6} md={10}>
            <Link href="/">
              <img src={logo} alt="logo-conservateur" />
            </Link>
          </Grid>
          <Grid item xs={6} md={2} className="header-connexion">
            <IconButton>
              <img src={connexion} alt="logo-connexion" />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
      <SearchBar />
      <Grid container>
        <Grid item xs={3} sm={5} md={7} lg={8} xl={9} />
        <Grid item xs={9} sm={7} md={5} lg={4} xl={3}>
          <HeaderTabs />
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default Header;
