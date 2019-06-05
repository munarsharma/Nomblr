import React from "react";
import SearchBar from "../SearchBar";
import { Link } from "react-router-dom";
import MainNavBar from "./mainNavbar";
import img from "../../images/logo1.png";

//add conditional rendering for nav button
//figure out how to use local logo file.

const Header = () => {
  return (
    <>
      <header className="main-header">
        <div id="logoSearch">
          <Link to="/">
            <img className="logo_pic" src={img} alt="img" />
          </Link>
          <SearchBar />
        </div>
        <MainNavBar />
      </header>
    </>
  );
};

export default Header;