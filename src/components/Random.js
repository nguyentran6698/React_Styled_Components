import React from "react";
import styled from "styled-components";
const Random = ({ title }) => {
  return (
    <Wrapper>
      <div className="spacer"></div>
      <h1>{title}</h1>
      <div className="underline"></div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .spacer {
    margin: 6rem 0;
  }
  h1 {
    text-align: center;
    text-transform: capitalize;
  }
  .underline {
    width: 5rem;
    height: 0.25rem;
    background: red;
    margin: 4rem auto;
  }
`;
export default Random;
