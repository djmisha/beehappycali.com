import JSConfetti from 'js-confetti'

const ConfettiMaker = (confettiEmojis) => {
  const isBrowser = typeof window !== "undefined"

  if(isBrowser) {
    const jsConfetti = new JSConfetti()
    jsConfetti.addConfetti({
      emojis: confettiEmojis,
    })
  }
}

export default ConfettiMaker;
