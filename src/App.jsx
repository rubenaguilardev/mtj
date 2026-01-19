import Entry from "./components/Entry"
import Header from "./components/Header"
import data from './data/data'

const App = () => {
  console.log(data)
  const entryElements = data.map(entry => (
    <Entry 
      key={entry.id}
      image={entry.img}
      title={entry.title}
      country={entry.country}
      mapLink={entry.googleMapsLink}
      dates={entry.dates}
      text={entry.text}
    />
  ))

  return (
    <div className="min-h-screen overflow-hidden max-w-136.25">
      <Header />
      {entryElements}
    </div>
    
  )
}

export default App