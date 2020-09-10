import React from "react";
import Layout from "../../components/Layout";
import { Container } from "reactstrap";
import WidgetIpc from "../../components/WidgetIpc";
const PriceQuotes = () => {
  return (
    <Layout>
      <Container>
        <h1>Índice de Precios y Cotizaciones</h1>
        <WidgetIpc />
      </Container>
    </Layout>
  );
};

export default PriceQuotes;
