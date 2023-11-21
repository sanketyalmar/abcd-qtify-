import React from "react";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/Search";
import HeroImage from "../HeroImage/HeroImage";
import "./NavBar.css";
import Card from "../Card/Card";

const NavBar = () => {
  return (
    <>
      <nav className="navbar">
        <Logo />
        <SearchBar />
        <Button text="Give Feedback" />
      </nav>
      <HeroImage />
      <Card />
    </>
  );
};

export default NavBar;
