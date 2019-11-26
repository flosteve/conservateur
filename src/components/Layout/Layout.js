import React from "react";
import "../../style/main.scss";
import Header from "../Header/Header";
import { Container } from "@material-ui/core";

const Layout = props => (
  <>
    <Header />
    <Container maxWidth="lg" className="page-container">
      {props.children}
    </Container>
  </>
);

export default Layout;
