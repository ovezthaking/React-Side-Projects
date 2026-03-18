import { useState } from "react"
import BlobBlue from "./components/BlobBlue"
import BlobYellow from "./components/BlobYellow"
import LandingPage from "./components/LandingPage"

function App() {
  const [screen, setScreen] = useState<string>('start')

  const handleStart = () => {
    setScreen('quiz')
  }

  return (
    <main className="relative overflow-hidden min-h-screen">
      <LandingPage handleStart={handleStart}/>
      <BlobYellow className={
        screen === 'start'
          ? "absolute right-0 top-0 transition-all duration-500 ease-out"
          : "absolute -right-5 -top-5 transition-all duration-500 ease-out"
      } 
      />
      <BlobBlue className={
        screen === 'start' ?
        "absolute left-0 bottom-0 transition-all duration-500 ease-out" :
        "absolute -left-8 -bottom-8 transition-all duration-500 ease-out"
      }
      />
    </main>
  )
}

export default App
