import React from "react";
import "../../style/main.scss";
import Header from "../Header/Header";
import { Container } from "@material-ui/core";

const Layout = props => (
  <>
    <Header />
    <Container
      maxWidth="lg"
      className="page-container"
      children={props.children}
    />
  </>
);

export default Layout;
