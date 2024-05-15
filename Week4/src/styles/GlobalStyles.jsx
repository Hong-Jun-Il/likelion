import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body, html{
        font-size: 62.5% !important;
        overflow: hidden;
    }

    a{
        text-decoration: none;
    }

    img, video{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    li, ol{
        list-style-type: none;
    }

    button{
        cursor: pointer;
        text-align: center;
        border-radius: 10px;
        border: none;
    }

    input{
        width: 352px;
        height: 48px;
        border-radius: 10px;
        border: 1px solid #7A7485;
        margin-bottom: 14px;
        padding: 17px 20.2px 16px;
    }
`;

export default GlobalStyles;