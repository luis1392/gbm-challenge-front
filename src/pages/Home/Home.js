import React from "react";
import { Redirect } from "react-router";

import Layout from "../../components/Layout";

import isLoggedIn from "../../utils/isLoggedIn";
import hasRedirect from "../../utils/hasRedirect";

import InitialPage from "../../components/InitialPage";
const Home = () => {
  if (isLoggedIn()) {
    const redirecTo = hasRedirect();
    if (redirecTo) {
      return <Redirect to={redirecTo} />;
    }
    return <Redirect to="/private" />;
  }
  return (
    <Layout>
      <InitialPage />
    </Layout>
  );
};

export default Home;
