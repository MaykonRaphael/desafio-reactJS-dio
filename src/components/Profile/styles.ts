import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 30px;
    
    a {
        text-decoration: underline;
        color: #3182CE;
    }
`;

export const UserImage = styled.img`
    width: auto;
    height: 200px;
    border-radius: 50%;
`;

export const UserInfos = styled.div`
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 20px;
`;

export const UserName = styled.h1`
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 10px;
`;

export const UserNickname = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 20px;

    h3 {
        font-weight: 700;
    }
`;

export const UserOtherData = styled.div`
    div {
        display: flex;
        gap: 8px;
        margin-top: 10px;
    }
`;

export const UserStatusAccount = styled.div`
    display: flex;
    gap: 10px;
    text-align: center;
    vertical-align: bottom;
`;