import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
  List,
  ListItem,
  Box,
  Link
} from "@material-ui/core";

import CloseIcon from "@material-ui/icons/Close";
import TableFondsModal from "../../components/Tables/TableFonds/TablesFondsModal";
import DocumentIcon from "../../assets/icons/document.png";
import SearchIcon from "../../assets/icons/recherche-icone copie.png";

const ModalFonds = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="lg"
      className="modal"
    >
      <DialogContent className="modal-container">
        <DialogTitle className="modal-title">
          Pluvalor premium c
          <CloseIcon onClick={handleClose} />
        </DialogTitle>
        <Grid container className="modal-sections-container">
          <Grid item xs={12} md={6} className="modal-section first">
            <Grid container className="top">
              <Grid item xs={12} className="item">
                <Typography
                  variant="h3"
                  component="h3"
                  className="modal-subtitle"
                >
                  Indice de
                  <span> performance</span>
                </Typography>
              </Grid>
              <Grid item xs={12} className="item">
                <TableFondsModal />
              </Grid>
            </Grid>
            <Grid container className="bottom">
              <Grid item xs={12} className="item">
                <Typography
                  variant="h3"
                  component="h3"
                  className="modal-subtitle"
                >
                  Information
                  <span> secondaires</span>
                </Typography>
              </Grid>
              <Grid item xs={12} className="item">
                <List component="ul" className="modal-list secondaire">
                  <ListItem component="li">
                    <Typography>Horizon de placement: </Typography>
                    <Typography component="span">3 à 5 ans</Typography>
                  </ListItem>
                  <ListItem component="li">
                    <Typography>VL: </Typography>
                    <Typography component="span">350</Typography>
                  </ListItem>
                  <ListItem component="li">
                    <Typography>Date de VL:</Typography>
                    <Typography component="span">30/04/2019</Typography>
                  </ListItem>
                  <ListItem component="li">
                    <Typography>Volatilité de 3 ans:</Typography>
                    <Typography component="span">-2</Typography>
                  </ListItem>
                  <ListItem component="li">
                    <Typography>Ratio de sharp 3 ans:</Typography>
                    <Typography component="span">0.07</Typography>
                  </ListItem>
                  <ListItem component="li">
                    <Typography>Notation ESG:</Typography>
                    <Typography component="span" className="esg">
                      B+
                    </Typography>
                  </ListItem>
                  <ListItem component="li">
                    <Typography>ISR:</Typography>
                    <Typography component="span">OUI</Typography>
                  </ListItem>
                </List>
                <Box className="document-link">
                  <Link href="!#">
                    <img src={DocumentIcon} alt="document icon" />
                  </Link>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} className="modal-section second">
            <Grid container className="top">
              <Grid item xs={12} className="item">
                <Typography
                  variant="h3"
                  component="h3"
                  className="modal-subtitle"
                >
                  Informations
                  <span> Générales</span>
                </Typography>
              </Grid>
              <Grid item xs={12} className="item">
                <List component="ul" className="modal-list generale">
                  <ListItem component="li">
                    <Typography>Code ISIN:</Typography>
                    <Typography component="span">FR15431201</Typography>
                  </ListItem>
                  <ListItem component="li">
                    <Typography>Note Morning Start:</Typography>
                    <div className="morningStar" />
                    <div className="morningStar" />
                    <div className="morningStar" />
                    <div className="morningStarEmpty" />
                    <div className="morningStarEmpty" />
                  </ListItem>
                  <ListItem component="li">
                    <Typography>Note Quantalys:</Typography>
                    <div className="morningStar" />
                    <div className="morningStar" />
                    <div className="morningStar" />
                    <div className="morningStarEmpty" />
                    <div className="morningStarEmpty" />
                  </ListItem>
                  <ListItem component="li">
                    <Typography>Catégorie:</Typography>
                    <Typography component="span">OPC</Typography>
                  </ListItem>
                  <ListItem component="li">
                    <Typography>Société de gestion:</Typography>
                    <Typography component="span">OUI</Typography>
                  </ListItem>
                  <ListItem component="li">
                    <Typography>Indicateur de risque:</Typography>
                    <Typography component="span" className="risque">
                      3
                    </Typography>
                  </ListItem>
                </List>
                <Box className="search-link">
                  <Link href="!#">
                    <img src={SearchIcon} alt="document icon" />
                  </Link>
                </Box>
              </Grid>
            </Grid>
            <Grid container className="bottom">
              <Grid item xs={12} className="item">
                <Typography
                  variant="h3"
                  component="h3"
                  className="modal-subtitle"
                >
                  Objectif d'
                  <span> investissement</span>
                </Typography>
              </Grid>
              <Grid item xs={12} className="item">
                <Typography paragraph className="modal-paragraphe">
                  L’objectif de gestion du fonds consiste à participer à
                  l’évolution du marché des petites entreprises et des
                  entreprises de taille intermédiaire françaises, en
                  sélectionnant les sociétés qui présentent, selon la société de
                  gestion, les meilleures perspectives de croissance à moyen
                  terme.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default ModalFonds;
