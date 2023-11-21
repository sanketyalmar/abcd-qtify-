import React from "react";
import HeroIma from "../../assets/HeroImage.png";
import "./HeroImage.css";

const HeroImage = () => {
  return (
    <div className="hero_image">
      <img src={HeroIma} alt="HeroIma" />
    </div>
  );
};

export default HeroImage;
