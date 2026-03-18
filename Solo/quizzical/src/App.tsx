import { useState } from "react"
import BlobBlue from "./components/BlobBlue"
import BlobYellow from "./components/BlobYellow"
import LandingPage from "./components/LandingPage"
import QuizPage from "./components/QuizPage"

function App() {
  const [screen, setScreen] = useState<string>('start')

  const handleStart = () => {
    setScreen('quiz')
  }

  return (
    <main className="relative overflow-hidden min-h-screen">
      {screen === 'start' && 
        <LandingPage handleStart={handleStart}/>
      }
      {screen === 'quiz' &&
        <QuizPage />
      }
      <BlobYellow className={
        screen === 'start'
          ? "fixed right-0 top-0 transition-all duration-500 ease-out"
          : "fixed -right-5 -top-5 transition-all duration-500 ease-out"
      } 
      />
      <BlobBlue className={
        screen === 'start' ?
        "fixed left-0 bottom-0 transition-all duration-500 ease-out" :
        "fixed -left-8 -bottom-8 transition-all duration-500 ease-out"
      }
      />
    </main>
  )
}

export default App
