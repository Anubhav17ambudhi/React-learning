import { useState } from "react"

function App() {
  const [color,setColor] = useState("olive");
  return (
    <div className = "w-full h-screen duration-200"
      style = {{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white rounded-3xl px-3 py-2">
          <button
            onClick = {(e) => setColor(e.target.style.backgroundColor)}  
            className="outline-none px-4 py-1 rounded-full shadow-2xl text-white"
            style={{backgroundColor: "#8B0000"}}
          >Red</button>
          <button
            onClick = {(e) => setColor(e.target.style.backgroundColor)}
            className="outline-none px-4 py-1 rounded-full shadow-2xl text-white"
            style={{backgroundColor: "green"}}
          >Green</button>
          <button
            onClick = {() => setColor("black")}
            className="outline-none px-4 py-1 rounded-full shadow-2xl text-white"
            style={{backgroundColor: "black"}}
            setColor = "white"
          >Black</button>
          <button
            onClick = {() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full shadow-2xl text-white"
            style={{backgroundColor: "blue"}}
            setColor = "white"
          >Blue</button>
          <button
            onClick = {() => setColor("orange")}
            className="outline-none px-4 py-1 rounded-full shadow-2xl text-white"
            style={{backgroundColor: "orange"}}
            setColor = "white"
          >Orange</button>
          <button
            onClick = {() => setColor("yellow")}
            className="outline-none px-4 py-1 rounded-full shadow-2xl text-black"
            style={{backgroundColor: "yellow"}}
            setColor = "white"
          >Yellow</button>
          <button
            onClick = {() => setColor("pink")}//onclick needs a function not a return type and all
            //but here if we have to pass a parameter to the setColor function here it gets a return value
            //so therefore we created a callback function and that is given as a parameter to the onClick 
            // function here and we can easily give the parameter to the setColor
            className="outline-none px-4 py-1 rounded-full shadow-2xl text-black"
            style={{backgroundColor: "pink"}}
            setColor = "white"
          >Pink</button>
        </div>
      </div>
    </div>
  )
}

export default App
