import React, { useState } from "react";
import "./Header.css";
import rmdb_logo from "../../../assests/reactMovie_logo.png";
import tmdb_logo from "../../../assests/tmdb_logo.png";

const Header = () => {
  return (
    <div className='rmdb-header'>
      <div className='rmdb-header-content'>
        <img src={rmdb_logo} className='rmdb-logo' alt='rmdb-logo'></img>
        <img src={tmdb_logo} className='rmdb-tmdb-logo' alt='tmdb-logo'></img>
      </div>
    </div>
  );
};

export default Header;
