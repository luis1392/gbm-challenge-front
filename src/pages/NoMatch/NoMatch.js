import React from "react";
import Layout from "../../components/Layout";
import { Container } from "reactstrap";

const NoMatch = () => {
  return (
    <Layout>
      <Container>
        <h1>Error 404, Not found</h1>
      </Container>
    </Layout>
  );
};

export default NoMatch;
