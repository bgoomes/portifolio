import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 80px;

    background-color: ${({ theme }) => theme.COLORS.back_700};
    color: #fff;

    

    figure{
        width: 350px;
        height: 40px;

        border: 1px solid red;
    }

    div {
        width: 980px;
        margin: auto;
        padding: 30px 0;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        

       

        a{
            text-decoration: none;
            font-size: 14px;
            
            color: ${({ theme }) => theme.COLORS.text};
            margin-left: 12px;
            padding: 8px;
            border-radius: 10px;
        }

        a:hover{
           
            background-color: ${({ theme }) => theme.COLORS.back_900};
            /* opacity: 0.7; */
        }
    }
    
`