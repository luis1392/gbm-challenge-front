import React, { Component } from "react";
import { Redirect } from "react-router";

import Layout from "../../components/Layout";
import RegisterForm from "../../components/RegisterForm";
import { Container } from "reactstrap";

import isLoggedIn from "../../utils/isLoggedIn";
import hasRedirect from "../../utils/hasRedirect";

const Register = () => {
  if (isLoggedIn()) {
    const redirecTo = hasRedirect();
    if (redirecTo) {
      return <Redirect to={redirecTo} />;
    }
    return <Redirect to="/private" />;
  }
  return (
    <Layout>
      <Container>
        <RegisterForm />
      </Container>
    </Layout>
  );
};

export default Register;
