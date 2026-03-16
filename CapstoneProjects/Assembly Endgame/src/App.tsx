import { useState } from "react"
import { languages } from "./data/languages.js"
import clsx from "clsx"

function App() {
  const [currentWord, setCurrentWord] = useState<string>('react')
  const [guessedLetters, setGuessedLetters] = useState<Array<string>>([])

  const wrongGuessCount: number = guessedLetters.filter(letter =>
    !currentWord.includes(letter)
  ).length
  const isGameWon = 
    currentWord.split('').every(letter => guessedLetters.includes(letter))
  const isGameLost = 
    wrongGuessCount >= languages.length - 1
  const isGameOver = isGameWon || isGameLost

  const alphabet = "abcdefghijklmnopqrstuvwxyz"

  const addGuessedLetter = (e: React.MouseEvent<HTMLButtonElement>) => {
    const selectedLetter = e.currentTarget.value.toLowerCase()

    setGuessedLetters(prevLetters => 
      prevLetters.includes(selectedLetter) ?
        prevLetters : 
        [...prevLetters, selectedLetter]
    )
  }

  const keyboardElements = alphabet.split('').map(letter =>{
    const isGuessed = guessedLetters.includes(letter)
    const isCorrect = isGuessed && currentWord.includes(letter)
    const isWrong = isGuessed && !currentWord.includes(letter)

    const className = clsx({
      correct: isCorrect,
      wrong: isWrong
    })
    return (
      <button
        className={className}
        key={letter}
        value={letter}
        onClick={addGuessedLetter}
      >
        {letter.toUpperCase()}
      </button>
    )
  })

  const wordElements = currentWord.split('').map((letter, index) => 
    guessedLetters.includes(letter) ?
      <span key={index}>{letter.toUpperCase()}</span> :
      <span key={index}></span>
  )

  const languageElements = languages.map((lang, index) => {
    const isLanguageLost = index < wrongGuessCount
    const className = clsx('chip',isLanguageLost && 'lost')
    return (
      <span
        style={{backgroundColor: lang.backgroundColor, color: lang.color}}
        className={className}
        key={lang.name}
      >
        {lang.name}
      </span>
    )
  })

  const gameStatusClass = clsx('game-status', {
    won: isGameWon,
    lost: isGameLost
  })

  const renderGameStatus = () => {
    if (!isGameOver) return null

    if (isGameWon) {
      return (
        <>
          <h2>You win!</h2>
          <p>Well done! 🎉</p>
        </>
      )
    }
    else {
      return (
        <>
          <h2>Game over!</h2>
          <p>You lose! Better start learning Assembly 😭</p>
        </>
      )
    }
  }

  return (
    <main>
      <header>
        <h1>Assembly: Endgame</h1>
        <p>Guess the word in under 8 attempts to keep the programming world safe from Assembly!</p>
      </header>
      <section className={gameStatusClass}>
        {renderGameStatus()}
      </section>
      <section className="language-chips">
        {languageElements}
      </section>
      <section className="word">
        {wordElements}
      </section>
      <section className="keyboard">
        {keyboardElements}
      </section>
      {isGameOver && <button className="new-game">New Game</button>}
    </main>
  )
}

export default App
