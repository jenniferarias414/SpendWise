import React, { useState } from 'react';
import './CoffeeCup.css';

const CoffeeCup = () => {
  const messages = [
    "Enjoy your coffee!",
    "Your wife would be proud of you.",
    "Coffee break time!",
    "You are a rockstar!",
    "Stay energized with coffee!",
    "Don't forget the toilet paper.",
    "Sip, relax, repeat!",
    "Coffee is always a good idea!",
    "Never settle for anything less than the best.",
    "Maybe try not to spend so much next time...",
    "Time for decaf?",
    "It's gonna be a fantastic day!"
  ];

  const [displayedMessage, setDisplayedMessage] = useState("");

  const displayRandomMessage = () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    setDisplayedMessage(messages[randomIndex]);
  };

  return (
    <div id="container" onClick={displayRandomMessage}>
      <div className="steam" id="steam1"></div>
      <div className="steam" id="steam2"></div>
      <div className="steam" id="steam3"></div>
      <div className="steam" id="steam4"></div>

      <div id="cup">
        <div id="cup-body">
          <div id="cup-shade"></div>
        </div>
        <div id="cup-handle"></div>
      </div>

      <div id="saucer"></div>

      <div id="shadow"></div>

      <h5>{displayedMessage}</h5>
    </div>
  );
}

export default CoffeeCup;
