import styled from "styled-components";

export const Container = styled.header`
    background-color: var(--gray-200);
    height: 33.25rem; // 532px

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .teste {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: absolute;
    }
    .image1 {
        position: absolute;
        top: 0;
        left: 0;
    }

    .image2 {
        position: absolute;
        bottom: calc(100vh - 33.25rem);
        right: 0;
    }
`

export const Title = styled.div`
    text-align: center;
    width: 647px;

    h3 {
        font-size: 16px;
        color: var(--red);
        font-weight: 500;
        padding-bottom: 18px;
    }

    h1 {
        font-size: 48px;
        color: var(--gray-900);
        font-weight: 700;
        padding-bottom: 40px;
    }

    strong {
        color: var(--purple);
    }
`

export const Content = styled.div`
    background-color: var(--white);
    display: flex;
    align-items: center;
    gap: 24px;

    padding: 40px;
    border-radius: 10px;
    border: 1px solid var(--gray-300);

    .search {
        display: flex;
        align-items: center;
        gap: 12px;

        height: 48px;
        width: 348px;

        background-color: var(--gray-100);
        border-radius: 5px;

        &:focus-within {
            border-bottom: 2px solid var(--gray-300);
        }

        input, select {
            border: none;
            background-color: transparent;
            width: 100%;
            
            &:focus {
                outline: none;
            }
        }

        .icon {
            height: 24px;
            width: 24px;
        }
        
    }
`

export const SearchInput = styled.div`
    padding: 12px 8px 12px 14px;
    
    input {
        ::-webkit-input-placeholder {
            color: var(--gray-500);
        }        
    }

`

export const SearchSelect = styled.div`
    padding: 12px 12px 12px 14px;

    select {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        color: var(--gray-500);
    }

    .select {
        width: 100%;
        background: var(--gray-100) url('../../../public/chevron-down.svg') 100% 50% no-repeat;
    }
`

export const SearchButton = styled.button`
    height: 48px;
    width: 169px;
    padding: 12px 14px;

    border-radius: 5px;
    border: none;

    background-color: var(--purple);
    color: var(--white);

    font-weight: 700;
    font-size: 14px;
    line-height: 24px;

    cursor: pointer;

    transition: filter 0.2s;

    &:hover {
        filter: brightness(1.1);
    }

    &:focus {
        outline: none;
        filter: brightness(1.1);
    }
`