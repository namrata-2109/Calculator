import React from 'react'
import "./App.css";
import { useState } from 'react';

export const App = () => {
  const [answer, setAnswer] = useState("")

  const clicks = (e) => {
    setAnswer(answer.concat(e.target.name))
  }

  const clear = () => {
    setAnswer("");
  }

  const back = () => {
    setAnswer(answer.slice(0, -1))
  }

  const calci = () => {
    setAnswer(eval(answer).toString());
  }
  return (
    <>
      <div className='head'>
        <h1>CALCULATOR APP</h1>
      </div>
      <div className='container'>
        <form>
          <input type="text" value={answer} />
        </form>
        <div className='keys'>
          <button onClick={clear} id='clear'>Clear</button>
          <button onClick={back} id='back'>⌫</button>
          <button name="/" onClick={clicks}>÷</button>
          <button name="7" onClick={clicks}>7</button>
          <button name="8" onClick={clicks}>8</button>
          <button name="9" onClick={clicks}>9</button>
          <button name="*" onClick={clicks}>x</button>
          <button name="4" onClick={clicks}>4</button>
          <button name="5" onClick={clicks}>5</button>
          <button name="6" onClick={clicks}>6</button>
          <button name="-" onClick={clicks}>-</button>
          <button name="1" onClick={clicks}>1</button>
          <button name="2" onClick={clicks}>2</button>
          <button name="3" onClick={clicks}>3</button>
          <button name="+" onClick={clicks}>+</button>
          <button name="." onClick={clicks}>.</button>
          <button name="0" onClick={clicks}>0</button>
          <button name="%" onClick={clicks}>%</button>
          <button name="=" onClick={calci} className="highlight">=</button>
        </div>
      </div>
    </>
  )
}
export default App
