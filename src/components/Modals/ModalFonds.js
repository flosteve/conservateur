import React from 'react';
import {Dialog, DialogContent, DialogTitle, Grid, Typography, List, ListItem, Box} from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import TableFondsModal from "../../components/Tables/TableFonds/TablesFondsModal"
import DocumentIcon from "../../assets/icons/document.png"

const ModalFonds = ({open, setOpen}) => {

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="lg" className="modal">
            <DialogContent className="modal-container">
                <DialogTitle className="modal-title">
                    Test
                    <CloseIcon onClick={handleClose}/>
                </DialogTitle>
                <Grid container className="modal-sections-container">
                    <Grid item xs={6} className="modal-section first">
                        <Grid container className="top">
                            <Grid item xs={12} className="item">
                                <Typography variant="h3" component="h3" className="modal-subtitle">
                                    Indice de
                                    <span> performance</span>
                                </Typography>
                            </Grid>
                            <Grid item xs={12} className="item"><TableFondsModal/></Grid>
                        </Grid>
                        <Grid container className="bottom">
                            <Grid item xs={12} className="item">
                                <Typography variant="h3" component="h3" className="modal-subtitle">
                                   Information
                                    <span> secondaires</span>
                                </Typography>
                            </Grid>
                            <Grid item xs={12} className="item">
                                <List>
                                    <ListItem>
                                        <Typography>Horizon de placement: <span>3 à 5 ans</span></Typography>
                                    </ListItem>
                                    <ListItem><Typography>VL: <span>350</span></Typography></ListItem>
                                    <ListItem><Typography>Date de VL: <span>30/04/2019</span></Typography></ListItem>
                                    <ListItem><Typography>Volatilité de 3 ans: <span>-2</span></Typography></ListItem>
                                    <ListItem><Typography>Volatilité de 3 ans: <span>-2</span></Typography></ListItem>
                                    <ListItem><Typography>Ratio de sharp 3 ans: <span>0.07</span></Typography></ListItem>
                                    <ListItem><Typography>Notation ESG: <span>B+</span></Typography></ListItem>
                                    <ListItem><Typography>ISR: <span>OUI</span></Typography></ListItem>
                                </List>
                                <Box style={{textAlign: 'right'}}><img src={DocumentIcon} alt="document icon"/></Box>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={6} className="modal-section second">
                        <Grid container className="top">
                            <Grid item xs={12} className="item">
                                <Typography variant="h3" component="h3" className="modal-subtitle">
                                    Informations
                                    <span> Générales</span>
                                </Typography>
                            </Grid>
                            <Grid item xs={12} className="item"><List>
                                <ListItem>
                                    <Typography>Horizon de placement: <span>3 à 5 ans</span></Typography>
                                </ListItem>
                                <ListItem><Typography>VL: <span>350</span></Typography></ListItem>
                                <ListItem><Typography>Date de VL: <span>30/04/2019</span></Typography></ListItem>
                                <ListItem><Typography>Volatilité de 3 ans: <span>-2</span></Typography></ListItem>
                                <ListItem><Typography>Volatilité de 3 ans: <span>-2</span></Typography></ListItem>
                                <ListItem><Typography>Ratio de sharp 3 ans: <span>0.07</span></Typography></ListItem>
                                <ListItem><Typography>Notation ESG: <span>B+</span></Typography></ListItem>
                                <ListItem><Typography>ISR: <span>OUI</span></Typography></ListItem>
                            </List></Grid>
                        </Grid>
                        <Grid container className="bottom">
                            <Grid item xs={12} className="item">
                                <Typography variant="h3" component="h3" className="modal-subtitle">
                                    Objectif d'
                                    <span> investissement</span>
                                </Typography>
                            </Grid>
                            <Grid item xs={12} className="item">
                                <Typography paragraph>
                                    L’objectif de gestion du fonds consiste à participer à l’évolution du marché des petites entreprises et des entreprises de taille intermédiaire françaises, en sélectionnant les sociétés qui présentent, selon la société de gestion, les meilleures perspectives de croissance à moyen terme.
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
