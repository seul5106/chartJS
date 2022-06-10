import "./css/style.min.css"
import React from 'react';
import {Routes, Route } from "react-router-dom";

//로그인 컴포넌트
import Login from "./components/Login"

//탭 컴포넌트
import Tabmenu from "./components/tabmenu/tabmenu"

function App() {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} exact={true} />
        <Route path="/tabMenu/*" element={<Tabmenu />} />
      </Routes>
    </div>
  );
}

export default App;
