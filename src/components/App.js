import React, {Component, useState} from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./../styles/App.css";

function App() {
  

  return (
    <div id="main">

<BrowserRouter>
<nav>
<Link to="/">Home</Link>
<Link to="/About">About</Link>
</nav>
<Routes>
<Route path="/" element={<div>Home component</div>}/>
<Route path="/About" element={<div>About component</div>}/>
<Route path="/*" element={<div>not found</div>}/>

</Routes>



</BrowserRouter>





 
    </div>
  );
}


export default App;
