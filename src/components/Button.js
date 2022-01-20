import styled from "styled-components";
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
  display: block;
`;

export const HipsterButton = styled(DefaultButton)`
  width: 400px;
  background: transparent;
  color: #645cff;
  border: 1px solid #645cff;
`;
