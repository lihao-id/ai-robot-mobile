import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    html,body{
        margin: 0;
    }

    h1,h2,h3,h4,h5,h6{
        margin:unset;
        line-height:1;
        font-weight:unset;
    }

    p{
        margin:unset;
    }

    button {
        padding: 0;
        background-color: unset;
        border: unset;
        cursor: pointer;
        
        &:focus,
        &:active {
            outline: unset;
        }
    }
`;
