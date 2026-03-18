import BlobBlue from "./components/BlobBlue"
import BlobYellow from "./components/BlobYellow"

function App() {
  return (
    <>
      <BlobYellow className="absolute right-0 top-0" />
      <BlobBlue className="absolute left-0 bottom-0"/>
    </>
  )
}

export default App
