import Header from "./components/Header";
import Entry from "./components/Entry";
import data from "./lib/data";
import type { JSX } from "react";

export default function App() {
  return (
    <>
      <Header />
      <main className="container">
        {data.map((item):JSX.Element => {
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