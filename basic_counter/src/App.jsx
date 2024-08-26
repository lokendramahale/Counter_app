import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(1)
  
  const addValue = () => {
    console.log("value added....",counter);
    // counter = counter + 1
    setCounter(counter + 1)
  }
  const removeValue = () => {
    console.log("value removed....",counter);
    // counter = counter + 1
    setCounter(counter - 1)
  }
  return (
    <>
     <h1>Counter :{counter} </h1>
     <h3>Press the add button to increase the counter <br /> and the the remove button for decreasing it.</h3>
     <br />
     <button onClick={addValue}>Add</button>
     <br /> <br />
     <button onClick={removeValue}>Remove</button>
     <p>Counter :{counter}</p>
    </>
  )
}

export default App
