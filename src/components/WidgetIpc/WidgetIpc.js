import React from "react";

import { GraphContainer } from "../../styles/Graphs";

import GraphIpc from "../GraphIpc";
import useFetch from "../../Hooks/useFetch";
import Loader from "../Loader";

const WidgetIpc = (props) => {
  const { response, errors, mesages, loading } = useFetch(
    "/cc4c350b-1f11-42a0-a1aa-f8593eafeb1e"
  );

  if (loading) {
    return <Loader text="Cargando información" />;
  }
  if (response === null) {
    return null;
  }

  if (errors) {
    return <div>{mesages}</div>;
  }

  return (
    <GraphContainer>
      <GraphIpc data={response} title="Precio" color="#000" />
    </GraphContainer>
  );
};

export default WidgetIpc;
