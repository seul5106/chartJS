import "./css/style.min.css"
import Login from "./components/Login"
import React, {useState, useEffect} from 'react';
import { Link, Routes, Route } from "react-router-dom";
import axios from "axios"

import Tab1 from "./components/tabmenu/tab1"
import Tab2 from "./components/tabmenu/tab2"
import Tab3 from "./components/tabmenu/tab3"


  
  

function App() {
  const [data, setData] = useState();

  useEffect(() =>{
    axios.get('http://openapi.seoul.go.kr:8088/6c61594f5a7365753130325779546a57/json/CardBusTimeNew/1/5/201511/7730/')
    .then(res => setData(res.data));
  },[])
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} exact={true} />
        <Route path="/tab1" element={<Tab1 data={data}/>} />
        <Route path="/tab2" element={<Tab2 data={data}/>} />
        <Route path="/Tab3" element={<Tab3 data={data}/>} />
      </Routes>
    </div>
  );
}

export default App;
