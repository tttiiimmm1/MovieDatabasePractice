import React, { useState } from "react";
import "./App.css";
import PotatoLogo from "./Images/PotatoLogo.jpg";
import SearchInput from "./Search.js";

export default function App() {
  const [searchedBool, setSearchedBool] = useState(false);

  return (
    <div className="app">
      <div className="app-header">
        <img className="App-logo" src={PotatoLogo} width="80px" alt="PotatoLogo"></img>
        <h1 className="header">Stinky Potatoes</h1>
        <p className="legal">©2021</p>
      </div>
      <div className="app-body">
        <div className="main">
          <SearchInput

          />
          <p>Yellow</p>
          <p>Blue</p>
          <p>Green</p>
        </div>
        <div className="suggested">
        Just put this here for now
        </div>
      </div>
      
    </div>
  )
}