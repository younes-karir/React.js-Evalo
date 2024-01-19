import { createGlobalStyle } from "styled-components";



const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  transition: background-color 600ms linear;
}

table{
  background-color: ${(props) => props.theme.colors.background2};
}

body {
  font-size: 16px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.background};
}

::-webkit-scrollbar {
  width: 19px;
  
}

::-webkit-scrollbar-thumb {
  border: 5px solid rgba(0, 0, 0, 0);
  background-clip: padding-box;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.primary} ;
  
}


`;

export default GlobalStyle;
