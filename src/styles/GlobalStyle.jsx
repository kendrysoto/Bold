import { createGlobalStyle } from "styled-components"
import { colors } from "./theme"

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;500;700;800;900&display=swap');
  html,
  body {
    padding: 0;
    margin: 0;
    position: relative;
    font-weight: 400;
    font-family: 'Montserrat', sans-serif;
    background-color: ${colors.background};
  }
  ul{
    padding: 0;
    margin: 0;
  }
  p{
    margin: 0;
    padding: 0;
  }
`


