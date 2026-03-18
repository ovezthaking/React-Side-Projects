import { useState } from "react"
import BlobBlue from "./components/BlobBlue"
import BlobYellow from "./components/BlobYellow"

function App() {
  const [screen, setScreen] = useState('start')

  return (
    <main className="relative overflow-hidden min-h-screen">
      <BlobYellow className={
        screen === 'start' ? 
        "absolute right-0 top-0" :
        "absolute -right-5 -top-5"
      } />
      <BlobBlue className={
        screen === 'start' ?
        "absolute left-0 bottom-0" :
        "absolute -left-8 -bottom-8"
      }/>
    </main>
  )
}

export default App
