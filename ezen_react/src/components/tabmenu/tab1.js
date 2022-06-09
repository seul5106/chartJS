import React, {useState} from 'react';
import MainTabMenu from './tabmenu'



const Tab1 = (data) => {
    const [busData, setbusData] = useState("");
    console.log(data)
    return (
        <>
            <MainTabMenu/>
            <h2>{JSON.stringify(data)}</h2>
        </>
    );
};

export default Tab1;