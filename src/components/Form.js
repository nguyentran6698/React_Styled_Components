import React from "react";
import styled, { css } from "styled-components";

const Button = styled.button.attrs((props) => {
  return { type: props.type || "button" };
})`
  background: red;
  border: none;
  color: white;
  padding: 0.25rem;
  cursor: pointer;
  /* styled based condition */
  ${({ type }) => {
    return (
      type === "submit" &&
      css`
        display: block;
        width: 100%;
        margin-top: 1rem;
        color: blue;
        border-radius: 0.25rem;
      `
    );
  }}
`;

const BasedInput = styled.input.attrs((props) => {
  return {
    type: props.type || "text",
    placeholder: props.placeholder || "please enter value",
  };
})`
  box-sizing: border-box;
  padding: 0.5rem;
  border: 2px solid #f2f4f8;
  border-radius: 0.25rem;
  width: 100%;
  margin-top: 1rem;
`;

const Form = () => {
  return (
    <div>
      <h2>some random stuffs</h2>
      <Button>click me</Button>
      <form
        css={`
          width: 300px;
          background: #fff;
          padding: 2rem;
          margin-top: 1rem;
        `}
      >
        <h2>form</h2>
        <BasedInput type="text" />
        <BasedInput type="number" placeholder="hello worl" />
        <Button className="" type="submit">
          submit
        </Button>
      </form>
    </div>
  );
};

export default Form;
