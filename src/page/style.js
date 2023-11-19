import styled from "styled-components";


export const Container = styled.main`
    width: 100%;
    height: 100vh;
    margin: auto;

    display: grid;

    overflow: auto;

` 

export const Section = styled.section`
        width: 980px;
        min-height: 400px;
        margin: 20px auto ;

        padding: 10px;

        border: 1px solid; 

        display: flex;
        gap: 15px;


    .text{
        width: 490px;
        height: 100%;

        h1{
            margin-top: 20px;
            color: ${({theme}) => theme.COLORS.links_100};

            font-size: 32px;
            font-weight: bold;
        }
        span{
            font-size: 14px;
            
        }
    }

    figure{
        padding: 15px;
    }
`