import React from "react";
import { Redirect } from "react-router";

import Layout from "../../components/Layout";
import LoginForm from "../../components/LoginForm";
import { Container } from "reactstrap";

import isLoggedIn from "../../utils/isLoggedIn";
import hasRedirect from "../../utils/hasRedirect";

const Login = () => {
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
        <LoginForm />
      </Container>
    </Layout>
  );
};

export default Login;
