import React from "react";
import CardImg1 from "../../assets/Card1.png";
import CardImg2 from "../../assets/Card2.png";
import "./Card.css";

const Card = () => {
  return (
    <div className="card_container">
      <div className="card_image">
        <img src={CardImg1} alt="CardImg1" />
      </div>
      <div className="card_image">
        <img src={CardImg2} alt="CardImg2" />
      </div>
    </div>
  );
};

export default Card;
