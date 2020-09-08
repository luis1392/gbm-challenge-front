import React from "react";

import { Container, Row, Col } from "reactstrap";
import {
  FooterContainer,
  FooterBlack,
  FooterCopy,
  FooterPartners,
} from "../../styles/Footer";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterBlack>
        <Container>
          <Row>GBM</Row>
          <Row></Row>
        </Container>
      </FooterBlack>

      <FooterPartners>
        <Container>
          <Row></Row>
        </Container>
      </FooterPartners>

      <FooterCopy>
        <Container>
          <Row></Row>
        </Container>
      </FooterCopy>
    </FooterContainer>
  );
};

export default Footer;
