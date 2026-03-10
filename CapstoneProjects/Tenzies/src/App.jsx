import { useState } from "react"
import Die from "./components/Die"
import {nanoid} from 'nanoid'

function App() {
  const [dice, setDice] = useState(generateAllNewDice())

  function generateAllNewDice() {

    return new Array(10)
      .fill(0)
      .map(() => (
        {
          value: Math.ceil(Math.random() * 6),
          isHeld: false,
          id: nanoid()
        }
      ))
  }

  const hold = id => {
    console.log(id)
  }

  const rollDice = () => {
    setDice(generateAllNewDice())
  }
  
  const diceElements = dice.map(obj => (
    <Die 
      key={obj.id}
      value={obj.value}
      isHeld={obj.isHeld}
      hold={() => hold(obj.id)}
    />
  ))

  return (
    <main>
      <div className="dice-container">
        {diceElements}
      </div>

      <button className="roll-dice" onClick={rollDice}>Roll Dice</button>
    </main>
  )
}

export default App
