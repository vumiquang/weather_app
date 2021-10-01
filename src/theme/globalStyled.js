import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*,
*:after,
*:before{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

ul{
    list-style: none;
}

a{
    text-decoration: none;
}

@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');

body{
    font-family: 'Roboto', sans-serif;
}
`;

export default GlobalStyle;
