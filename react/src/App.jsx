import { useState } from "react"
import Greeting from "./components/Greeting"

const App = () => {

  const [counter, setCounter] = useState(0)


  const username = "miorii7"



  //const handleMinus = () => {
  //  setCounter(counter - 1 )
  //
//
  //}

  //const handlePlus = () => {
  //setCounter(counter + 1 )

  const handleCounter = (diff) => {
    setCounter((val) => val + diff)

  }

  return (
    <>

    <Greeting username = {username} />
    <div>
      <button onClick={() =>handleCounter(-1)}>-</button>
      <span>{counter}</span>
      <button onClick={() => handleCounter(1)}>+</button>
    </div>
    </>
  )
}

export default App