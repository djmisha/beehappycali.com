import React from "react";
import JSConfetti from 'js-confetti'

const Bee = () => {
  const jsConfetti = new JSConfetti()
  const handleBees = () => {
    jsConfetti.addConfetti({
      emojis: ['😍', '🥰', '❤️'],
   })
  }

  return (
    <button className="bee" onClick={handleBees}>
      🐝 
    </button>
  )
};

export default Bee
