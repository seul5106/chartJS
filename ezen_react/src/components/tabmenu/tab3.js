import React from 'react';
import MainTabMenu from './tabmenu'
const Tab3 = (data) => {
    return (
        <>
           <MainTabMenu/>
           <h2>{JSON.stringify(data)}</h2>
        </>
    );
};

export default Tab3;