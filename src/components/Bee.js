import React from "react";
import ConfettiMaker from "./ConfettiMaker";

const Bee = () => {
  const handleBees = () => {
    ConfettiMaker(['😍', '🥰', '❤️']);
  }

  return (
    <button className="bee" onClick={handleBees}>
      🐝 
    </button>
  )
};

export default Bee
