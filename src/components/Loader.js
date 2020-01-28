import React from "react";
import styled from "styled-components";
import loader from "../images/loader.svg";

const StyledLoader = styled.div`
  display: ${p => (p.loading ? "flex" : "none")};
  width: 100%;
  height: 100%;
  & img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

function Loader({ loading }) {
  return (
    <StyledLoader loading={loading}>
      <img src={loader} alt="Loader" />
    </StyledLoader>
  );
}

export default Loader;
