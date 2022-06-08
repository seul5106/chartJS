import React from 'react';
import { NavLink} from "react-router-dom"; 
import styled from 'styled-components';
const MenuLink = styled(NavLink)`
    font-size: 20px;
    cursor: pointer;
    text-decoration: none;
    padding-bottom: 2px;
    color: #222;

    &:hover {
        color: #22b8cf;
    }

    &:after {
        content: '|';
        display: inline-block;
        padding: 0 7px;
        color: #ccc;
    }

    &:last-child {
        &:after {
            color: #fff;
        }
    }

    &.active {
        text-decoration: underline;
        color: #22b8cf;
        &:after {
            border-bottom: 4px solid #fff !important;
        }
    }
`;

const tabmenu = () => {
    return (
        <>
            <MenuLink to="/tab1">tab1</MenuLink>
            <MenuLink to="/tab2">tab2</MenuLink>
            <MenuLink to="/tab3">tab3</MenuLink>
            <hr/>
        </>
    );
};

export default tabmenu;