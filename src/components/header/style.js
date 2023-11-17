import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: 70px;
    box-shadow: rgba(255, 255, 255, 0.09) 0px 2px 1px, rgba(255, 255, 255, 0.09) 0px 4px 2px,
    rgba(255, 255, 255, 0.09) 0px 8px 4px, rgba(255, 255, 255, 0.09) 0px 16px 8px,
    rgba(255, 255, 255, 0.09) 0px 32px 16px;

    /* background-color: ${({ theme }) => theme.COLORS.back_700}; */
    

    display: flex;
    align-items: center;
    justify-content: center;

    

    figure{
        width: 350px;
        height: 40px;

        
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
            font-weight: bold;
            
            color: ${({ theme }) => theme.COLORS.text};
            margin-left: 12px;
            padding: 8px;
            border-radius: 10px;
            transition: background-color 0.5s;
        }

        a:hover{
           
            background-color: ${({ theme }) => theme.COLORS.back_900};
            /* opacity: 0.7; */
            
        }
    }
    
`