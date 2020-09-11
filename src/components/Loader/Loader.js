import React from "react";

import {
  LoaderBox,
  LoaderContainer,
  Spinner,
  LoaderLabel,
} from "../../styles/Loader";

const Loader = (props) => {
  const { text, position } = props;
  return (
    <LoaderBox position={position}>
      <LoaderContainer>
        <Spinner />
        <LoaderLabel>{text}</LoaderLabel>
      </LoaderContainer>
    </LoaderBox>
  );
};

export default Loader;
