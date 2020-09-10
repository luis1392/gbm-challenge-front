import React from "react";

import { GraphContainer } from "../../styles/Graphs";

import GraphIpc from "../GraphIpc";
import useFetch from "../../Hooks/useFetch";

const WidgetIpc = (props) => {
  const { response, errors, mesages } = useFetch(
    "/cc4c350b-1f11-42a0-a1aa-f8593eafeb1e"
  );

  if (response === null) {
    return null;
  }

  return (
    <GraphContainer>
      <GraphIpc data={response} title="Precio" color="#000" />
    </GraphContainer>
  );
};

export default WidgetIpc;
