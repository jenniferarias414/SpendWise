import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "./UI/Card.js";
import "./CoffeeMaker.css";

const CoffeeMaker = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/auth');
      };

  return (
    <section className="backdrop">
      <Card>
        <div className="coffee-animation">
          <div class="container">
            <div class="coffee-header">
              <div class="coffee-header__buttons coffee-header__button-one"></div>
              <div class="coffee-header__buttons coffee-header__button-two"></div>
              <div class="coffee-header__display"></div>
              <div class="coffee-header__details"></div>
            </div>
            <div class="coffee-medium">
              <div class="coffe-medium__exit"></div>
              <div class="coffee-medium__arm"></div>
              <div class="coffee-medium__liquid"></div>
              <div class="coffee-medium__smoke coffee-medium__smoke-one"></div>
              <div class="coffee-medium__smoke coffee-medium__smoke-two"></div>
              <div class="coffee-medium__smoke coffee-medium__smoke-three"></div>
              <div class="coffee-medium__smoke coffee-medium__smoke-for"></div>
              <div class="coffee-medium__cup"></div>
            </div>
            <div class="coffee-footer"></div>
          </div>
        </div>
        <h3>Grab a cup-o-coffee, this could take a while...</h3>
        <div className="button-container">
  <button onClick={handleButtonClick}>I'm ready!</button>
</div>

      </Card>
    </section>
  );
};

export default CoffeeMaker;
