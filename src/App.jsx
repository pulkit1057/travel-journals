
import Header from "../components/Header"
import Entry from "../components/Entry"
import data from "../data"

export default function App() {
  const Places = data.map((place) =>{
    return (<Entry 
      key = {place.id}
      object = {place}
    />)
  })
  return (
    <>
      <Header />
      <main className="container">
        {Places}
      </main>
    </>
  )
}