import "./css/style.min.css"
import Login from "./components/Login"
import React from 'react';
import { Link, Routes, Route } from "react-router-dom";

import Tab1 from "./components/tabmenu/tab1"
import Tab2 from "./components/tabmenu/tab2"
import Tab3 from "./components/tabmenu/tab3"

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} exact={true} />
        <Route path="/tab1" element={<Tab1 />} />
        <Route path="/tab2" element={<Tab2 />} />
        <Route path="/Tab3" element={<Tab3 />} />
      </Routes>
    </div>
  );
}

export default App;
