import styled from "styled-components";

// tag template literal
const BasicTitle = styled.h1`
  text-align: center;
  text-transform: capitalize;
`;

const DefaultButton = styled.button`
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

function App() {
  return (
    <div style={{ padding: "2rem", backgroundColor: "grey" }}>
      <BasicTitle>styled component</BasicTitle>
      <DefaultButton>click me</DefaultButton>
    </div>
  );
}

export default App;
