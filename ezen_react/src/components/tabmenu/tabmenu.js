import React from 'react';
import { NavLink, Routes, Route } from "react-router-dom";
import styled from 'styled-components';

import Tab1 from "./tab1"
import Tab2 from "./tab2"
import Tab3 from "./tab3"

//탭메뉴 활성화를 위한 스타일 컴포넌트 .active때문에 사용
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



const Tabmenu = () => {

    return (
        <>
            <MenuLink to="/tabMenu/tab1">tab1</MenuLink>
            <MenuLink to="/tabMenu/tab2">tab2</MenuLink>
            <MenuLink to="/tabMenu/tab3">tab3</MenuLink>
            <hr />
            <Routes>
                <Route path="tab1" element={<Tab1 />} />
                <Route path="tab2" element={<Tab2 />} />
                <Route path="tab3" element={<Tab3 />} />
            </Routes>
        </>
    );
};

export default Tabmenu;