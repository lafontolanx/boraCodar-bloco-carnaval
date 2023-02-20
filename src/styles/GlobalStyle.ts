import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: var(--white);
    };
    :root {
        --white: #fff;
        --black: #000;
        --gray-900: #121214;
        --gray-500: #7c7c8a;
        --gray-300: #eaeaea;
        --gray-200: #f8f8ff;
        --gray-100: #f4f4ff;
        --purple: #6246ea; 
        --red: #e45858; 
    };
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    };
`
