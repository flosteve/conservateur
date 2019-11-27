import React from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  IconButton,
  Menu,
  MenuItem
} from "@material-ui/core";
import logo from "../../assets/icons/logo-conservateur.png";
import connexion from "../../assets/icons/connexion.png";
import SearchBar from "../SearchBar/SearchBar";
import HeaderTabs from "../HeaderTabs/HeaderTabs";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position="static" className="header-top">
      <Toolbar className="header-container">
        <Grid container className="header-main-grid">
          <Grid item xs={6} md={10}>
            <IconButton href="/">
              <img src={logo} alt="logo-conservateur" />
            </IconButton>
          </Grid>
          <Grid item xs={6} md={2} className="header-connexion">
            <IconButton
              onClick={handleClick}
              aria-controls="main-menu"
              aria-haspopup="true"
            >
              <img src={connexion} alt="logo-connexion" />
            </IconButton>
            <Menu
              id="main-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              anchorPosition={{ top: 20 }}
            >
              <MenuItem onClick={handleClose}>Paramètres</MenuItem>
              <MenuItem onClick={handleClose}>se déconnecter</MenuItem>
            </Menu>
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
