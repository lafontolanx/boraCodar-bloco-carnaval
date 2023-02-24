import styled from "styled-components";

export const Container = styled.header`
    background-color: var(--white);
    padding: 100px;
`

export const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;
`

export const ButtonSelect = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 8px;
    border-radius: 6px;
    border: 1px solid var(--gray-300);
`

export const Button = styled.button`
    width: 86px;
    height: 32px;
    border: none;
    border-radius: 6px;
    background-color: transparent;
    color: var(--purple);
    font-size: 14px;
    font-weight: 700;

    &:hover, &:active {
        color: var(--white);
        background-color: var(--purple);
    }
`

export const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 24px;
`