import styled, { css } from "styled-components";
export const DefaultButton = styled.button`
  background: #645cff;
  color: #fff;
  text-transform: capitalize;
  cursor: pointer;
  padding: 0.25rem;
  margin: 1rem auto;
  border-radius: 0.25rem;
  width: 200px;
  border: none;
  ${({ large }) =>
    large
      ? css`
          padding: 1rem;
          font-size: 1.5rem;
          font-weight: 700;
        `
      : css`
          padding: 0.5rem;
          font-size: 1rem;
          font-weight: 400;
        `}
  display: block;
  font-weight: 400;
`;

export const HipsterButton = styled(DefaultButton)`
  width: 400px;
  background: transparent;
  color: #645cff;
  border: 1px solid #645cff;
  padding: 1rem;
  display: inline-block;
  margin-left: 1rem;
  text-align: center;
  text-decoration: none;
`;
