import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #f2f4f8;
}
.bg-grey {
  background: grey;
}
.title {
  text-transform: uppercase;
  color: red;
}
.btn{
  padding:0.25rem;
  width:200px;
  margin:1 auto;
  color:#fff;
  background:#645cff;
  display:block;
  margin:1rem auto;
  text-transform: capitalize;
  font-size:1rem;
  border:none;
  cursor:pointer;

}
`;
export default GlobalStyle;
