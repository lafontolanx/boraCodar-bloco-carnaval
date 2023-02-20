import styled from "styled-components";

export const Container = styled.header`
    background-color: var(--gray-200);
    height: 33.25rem; // 532px

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Title = styled.div`
    text-align: center;
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

        input, select {
            border: none;
            background-color: transparent;
            width: 100%;
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
    color: var(--gray-500);

    select {
        -webkit-appearance: none;
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
`