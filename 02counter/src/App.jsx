import { useState } from 'react'// it is from here the hooks are injected
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //this is used to propogate the state change in the UI of the application
  // useState(true)
  // useState(false)
  // useState({})
  // useState('hitesh')
  // useState('')
  // useState([]) // this can be given in the default value of the variable

  let [counter,setCounter] = useState(15);//second is usually the setvariable

  // let counter = 15;

  const addValue = () => {
    console.log("clicked",counter);
    //counter = counter + 1; this was old method to update the variable
    if(counter < 20)
    counter = counter + 1;
    setCounter(counter)
  }

  const removeValue = () => {
    if(counter >= 1)
      setCounter(counter-1);
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>
      <button
      onClick={addValue}
      >Addvalue {counter}</button>
      <br/>
      <button
      onClick = {removeValue}
      >Removevalue{counter}</button>
      <p>footer: {counter}</p>
    </>//this here element is converted to the object which is then rendered and 
    // added to the dom with the help of react is done by
    // babel
  )
}

export default App
