import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(20);

  //let counter = 15;

  const addValue = () => {
    // counter++;

    if (counter === 20) {
      alert("Value has reached it's limit");
    }
    else {
      setCounter(++counter);

      console.log("Clicked", counter);
    }
  };

  const removeValue = ()=>{
    if(counter===0){
      alert("value cannot become negative");
    }
    else{
      setCounter(--counter);
    }
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value:{counter}</h2>

      <button onClick={addValue}>Add value{counter}</button>
      <br></br>
      <button onClick={removeValue}>Remove value{counter}</button>

      <p>footer:{counter}</p>
    </>
  )
}

export default App
