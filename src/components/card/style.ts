import styled from "styled-components";

export const Container = styled.header`
    background-color: var(--white);
    border: 1px solid var(--gray-300);

    width: 384px;
    height: 323px;
    border-radius: 10px;

    background-size: 384px;
    background-position-x: center;
    background-position-y: -50px;
    background-repeat: no-repeat;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`

export const Content = styled.div`
    padding: 16px;
    height: 170px;
    background-color: var(--white);

    display: flex;
    flex-direction: column;
    gap: 16px;

    h1 {
        font-size: 20px;
        font-weight: 700;
        color: var(--gray-900);
    }

    h4 {
        font-size: 16px;
        font-weight: 400;
        color: var(--gray-500);
        line-height: 160%;
    }
`

export const Location = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

    p {
        font-size: 16px;
        font-weight: 400;
        color: var(--gray-800);
        line-height: 160%;
    }
`