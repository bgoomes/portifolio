import styled from "styled-components";

export const Container = styled.footer`
    width: 100%;
    height: 200px;

    header span{
        width: 100%;
        font-size: 24px;
        font-weight: bold;
        text-transform: uppercase;
        
    }

    header p{
        font-size: 14px;
        margin-top: 12px;
        color: #dedede;
        opacity: 0.6;
        
    }
    
`

export const Content = styled.div`
        width: 980px;
        margin: auto;
        display: flex;
        flex-direction: column;
        gap: 12px;

        button{
            width: 150px;
            height: 35px;
            border: none;
            border-radius: 50px;
            background-color: ${({ theme }) => theme.COLORS.links_100};
            color:${({ theme }) => theme.COLORS.text};
            font-weight: bold;
            cursor: pointer;

            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            transition: transform 0.4s;
           
        }

        button:hover{
            transform: scale(1.1);
        }
`


export const Redes = styled.div`

        width: 100%;
        height: 50px;
        

        nav{
            display: flex;
            align-items: center;
            justify-content: center;
            
            gap: 20px;
        }

        a{
            > svg{
                color:${({ theme }) => theme.COLORS.text};
                font-size: 24px;
                
                transition: color 0.4s;
            }
        }

        a svg:hover{
            color:${({ theme }) => theme.COLORS.links_100};
        }
        
`