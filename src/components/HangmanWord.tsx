// import React from 'react'

type HangmanWordProps = {
    guessedLetters: string[]
    wordToGuess : string
    reveal?: boolean
}

const HangmanWord = ({guessedLetters, wordToGuess, reveal = false}: HangmanWordProps) => {

  return (
    <div className='testWord'>
      {wordToGuess.split('').map((letter, index) => (
        <span className="testWordCharacters" key={index}>
            <span
            style={{
                visibility: guessedLetters.includes(letter) || reveal
                ? 'visible' : 'hidden',
              color : !guessedLetters.includes(letter) && reveal ? 'red' : 'black'
            }}
            >{letter}</span>
        </span>
      ))}
    </div>
  )
}

export default HangmanWord
