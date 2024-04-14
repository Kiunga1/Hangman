import React from 'react'
import './styles.css'

const HEAD = (<div className='head'/>);
const BODY = (<div className='body'/>);
const RIGHT_ARM = (<div className='right_arm'/>);
const LEFT_ARM = (<div className='left_arm'/>);
const RIGHT_LEG = (<div className='right_leg'/>);
const LEFT_LEG = (<div className='left_leg'/>);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

type HangmanDrawingProps ={
  numberOfGuesses: number
}

const HangmanDrawing = ({numberOfGuesses}:HangmanDrawingProps) => {

  return (
    <div className='hangmanDrawing'>
        {BODY_PARTS.slice(0, numberOfGuesses)}
        <div className="div4"></div>
        <div className="div3"></div>
        <div className="div2"></div>
        <div className='base'></div>
    </div>
  )
}

export default HangmanDrawing
