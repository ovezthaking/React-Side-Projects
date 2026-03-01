import Header from "./components/Header";
import Entry from "./components/Entry";
import data from "./lib/data";

export default function App() {
  return (
    <>
      <Header />
      <main className="container">
        {data.map(item => {
          const {img, title, country, googleMapsLink, dates, text} = item

          return (
            <Entry
              img={{ 
                src: img.src,
                alt: img.alt
              }}
              title={title}
              country={country}
              googleMapsLink={googleMapsLink}
              dates={dates}
              text={text}
            />
        )})}
      </main>
    </>
    
  )
}