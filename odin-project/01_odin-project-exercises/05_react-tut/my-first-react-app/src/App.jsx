import { useState } from 'react'
import './App.css'

function App() {
  const [change, setChange] = useState(true)
  return (
    <>
      <button onClick={() => setChange(!change)}>Click here!</button>
      {change ? (<h1>Hello World</h1>) : (<h1>Uyang the Great</h1>)}
    </>
  )
}

export default App
