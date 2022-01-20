import React from "react";
import styled from "styled-components";
const ComplexTitle = ({ title, className }) => {
  return (
    <Wrapper>
      <h1>{title}</h1>
      <div className="underline"></div>
      <h1 className="title">random</h1>
      <div className="box"></div>
    </Wrapper>
  );
};

// this will target h1 in this wrapper
const Wrapper = styled.div`
  h1 {
    text-transform: capitalize;
    text-align: center;
  }
  .underline {
    width: 5rem;
    height: 0.25rem;
    background: #645cff;
    margin: 0 auto;
  }
  .title {
    color: blue;
  }
  .box {
    height: 10px;
    border: 2px solid red;
  }
`;
export default ComplexTitle;
