import { useState } from "react"


function App() {
  const [cars, setCars] = useState(['A4', 'Golf', 'accord'])
  const addCars = () => {
    setCars(state => [...state, 'Jetta'])
  }
  return (
    <>
      <h1>hello word</h1>
      <button onClick={addCars}>Add</button>
      <ul>
        {cars.map(car => <li key={car}>{car}</li>)}
      </ul>
    </>
  )
}

export default App
