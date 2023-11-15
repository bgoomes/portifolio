import styled from "styled-components";


export const Container = styled.main`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-content: center;
    gap: 10px;

    button {
        width: 200px;
        height: 40px;
        border-radius: 5px;
        cursor: pointer;
    }
`