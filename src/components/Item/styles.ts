import styled from 'styled-components';

export const ItemArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 310px;
    padding: 15px;
    border: 1px solid #26353D;
    border-radius: 5px;

    strong {
        font-weight: 700;
    }
`;

export const ItemTitle = styled.h2`
    color: #FA962A;
    font-weight: 700;
    text-transform: uppercase;
`;

export const ItemFullName = styled.div`
    a {
        color: #3182CE;
    }
`;