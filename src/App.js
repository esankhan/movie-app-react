import React, { useState } from "react";
import Header from "./components/elements/Header/Header";
import Home from "./components/Home/Home";

import "./App.css";

const App = () => {
  return (
    <div>
      <Header></Header>
      <Home></Home>
    </div>
  );
};

export default App;
