import Header from "./components/Header";
import Entry from "./components/Entry";
import data from "./lib/data";

export default function App() {
  return (
    <>
      <Header />
      <main className="container">
        {data.map(item => {
          return (
            <Entry
            key={item.id}
              {...item}
            />
        )})}
      </main>
    </>
    
  )
}