import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body, input, button{
        background-color: ${({ theme }) => theme.COLORS.back_700};
        font-size: 16px;
        font-family: 'Archivo', sans-serif;
        color: ${({ theme }) => theme.COLORS.text};
    }
`