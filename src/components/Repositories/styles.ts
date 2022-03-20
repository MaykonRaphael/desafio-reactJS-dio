import styled from 'styled-components';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

export const TabsArea = styled(Tabs)`
    font-size: 16px;
    margin-bottom: 30px;
`;

export const TabListArea = styled(TabList)`
    display: flex;
    list-style-type: none;
    gap: 10px;
    padding: 10px;
`;

export const TabArea = styled(Tab)`
    border: 1px solid #26353D;
    border-radius: 6px;
    padding: 10px;
    user-select: none;
    cursor: pointer;

    &:focus {
        outline: none;
    }

    &.is-selected {
        box-shadow: 3px 2px 10px rgba(250,250,250, 0.2);
    }
`;

export const TabPanelArea = styled(TabPanel)`
    display: none;
    padding: 8px;
    border: 1px solid #26353D;
    box-shadow: 0 0 0.3em rgba(250, 250, 250, 0.3);
    margin-left: 10px;

    &.is-selected {
        display: block;
    }
`;

export const TabPanelItem = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;
    justify-content: space-evenly;
`;