import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body, input, button{
        background-color: ${({ theme }) => theme.COLORS.back_800};
        font-size: 16px;
    }
`