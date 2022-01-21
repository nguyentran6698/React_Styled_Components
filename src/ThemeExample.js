import styled, { ThemeProvider } from "styled-components";
import { useState } from "react";
import ComplexTitle from "./components/ComplexTitle";
import AlternativeTitle from "./components/AlternativeTitle";
import GlobalStyles from "./global-style";
import Card from "./components/Card";
const BaseTheme = {
  color: "#222",
  background: "#fff",
};
const DarkTheme = {
  color: "#fff",
  background: "#222",
};
const Container = styled.div`
  padding: 2rem;
  color: ${(props) => props.theme.color};
  background: ${(props) => props.theme.background};
`;
function App() {
  const [baseTheme, setTheme] = useState(true);
  return (
    <ThemeProvider theme={baseTheme ? BaseTheme : DarkTheme}>
      <GlobalStyles />
      <Container>
        <h1>hello world</h1>
        <button className="btn" onClick={() => setTheme(!baseTheme)}>
          toggle me
        </button>
      </Container>
    </ThemeProvider>
  );
}

export default App;
