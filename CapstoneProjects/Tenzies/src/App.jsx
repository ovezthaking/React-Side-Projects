import { useState } from "react"
import Die from "./components/Die"

function App() {
  const [dice, setDice] = useState(generateAllNewDice())

  function generateAllNewDice() {

    return new Array(10)
      .fill(0)
      .map(() => Math.ceil(Math.random() * 6))
  }

  const rollDice = () => {
    setDice(generateAllNewDice())
  }
  
  const diceElements = dice.map(value => (
    <Die value={value}/>
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
