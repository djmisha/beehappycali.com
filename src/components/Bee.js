import React from "react";
import JSConfetti from 'js-confetti'

const isBrowser = typeof window !== "undefined"

const Bee = () => {

  const handleBees = () => {
    if(isBrowser) {
        const jsConfetti = new JSConfetti()
        jsConfetti.addConfetti({
          emojis: ['😍', '🥰', '❤️'],
      })
    }
  }

  return (
    <button className="bee" onClick={handleBees}>
      🐝 
    </button>
  )
};

export default Bee
