import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "hitest",
    age:21
  }
  let newArr = [1,2,3]
  return (
    <>
      <h1 className = 'bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card username = "chai aur code" contexttext = "This is the wonderful"/>
      <Card username = "Hello bhai sab badhiya"/>
    </>
  )
}

export default App
