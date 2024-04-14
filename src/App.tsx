import  { useCallback, useEffect, useState } from 'react'
import './App.css'
import words from './wordList.json'
import HangmanDrawing from './components/HangmanDrawing'
import HangmanWord from './components/HangmanWord'
import Keyboard from './components/Keyboard'

function getWord() {
  return words[Math.floor(Math.random() * words.length)]
}

const App = () => {
  const [wordToGuess, setWordToGuess] = useState(getWord)
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])
  console.log (wordToGuess)

  const inCorrectLetters = guessedLetters.filter(
    letter => !wordToGuess.includes(letter)
  )

  const isLoser = inCorrectLetters.length >= 6
  const isWinner = wordToGuess
  .split('')
  .every(letter => guessedLetters.includes(letter))

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isWinner || isLoser)
        return
      setGuessedLetters(currentLetters => [...currentLetters, letter])  
    }, [guessedLetters, isWinner, isLoser]
  )

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key
      // check if pressed key is between a and z
      if (!key.match(/^[a-z]$/)) return

      e.preventDefault()
      addGuessedLetter(key)
    }

    document.addEventListener('keypress', handler)
    return () => {
      //remove thwe event listener when the component mounts
      document.removeEventListener('keypress', handler)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [guessedLetters])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key
      // check if pressed key is between enter
      if (key !== 'Enter') return

      e.preventDefault()
      setGuessedLetters([])
      setWordToGuess(getWord())
      
    }

    document.addEventListener('keypress', handler)
    return () => {
      //remove thwe event listener when the component mounts
      document.removeEventListener('keypress', handler)
    }
  }, [guessedLetters])

  return (
    <div className='app'>
      {/* <h1 className='heading'>Hangman Game</h1> */}
      <div className='gameResults'>
        {isWinner && "Winner! - Refresh to try again"}
        {isLoser && "You Lose, Nice Try! - Refresh to try again"}
      </div>
      <HangmanDrawing numberOfGuesses= {inCorrectLetters.length}/>
      <HangmanWord
       reveal = {isLoser}
        guessedLetters = {guessedLetters} 
        wordToGuess = {wordToGuess} 
      />
      <Keyboard
        disabled = {isLoser || isWinner}
        activeLetters = {guessedLetters.filter(letter => 
          wordToGuess.includes(letter)
        )}
        inactiveLetters={inCorrectLetters}
        addGuessedLetter = {addGuessedLetter}
      />
    </div>
  )
}

export default App
