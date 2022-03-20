import styled from 'styled-components';

export const Header = styled.header`
    padding: 30px 0;
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Input = styled.input`
    flex: 1;
    padding: 13px 10px;
    border-radius: 5px;
    border: 1px solid #26353D;
    font-size: 18px;
    font-weight: 500;

    &:focus {
        outline: none;
    }
`;

export const Button = styled.button`
    background-color: #F0F6FC;
    padding: 10px 25px;
    border-radius: 5px;
    margin-left: 10px;
    color: #161B22;
    text-transform: uppercase;
    font-size: 15px;
    font-weight: 700;

    &:hover {
        background-color: #BABBBD;
    }
`;