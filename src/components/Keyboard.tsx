

const KEYS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ]

  type KeyboardProps = {
    disabled: boolean
    activeLetters: string[]
    inactiveLetters: string[] 
    addGuessedLetter: (letter:string) => void
  }

const Keyboard = ({activeLetters, inactiveLetters, addGuessedLetter, disabled = false}: KeyboardProps) => {
    
      
  return (
    <div className='keyboard'>
      {KEYS.map(key => {
        const isActive = activeLetters.includes(key)
        const isInActive = inactiveLetters.includes(key)

        return (
        <button 
            onClick={() => addGuessedLetter(key)}
            className={`btn ${isActive ? 'active' : ''} ${isInActive ? 'inactive' :''} `}
            disabled = {isInActive || isActive || disabled}
            key={key}
        >
            {key}
        </button>)
      })}
    </div>
  )
}

export default Keyboard
