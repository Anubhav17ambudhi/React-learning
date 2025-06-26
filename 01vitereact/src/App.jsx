import Chai from "./chai.jsx"

function App() {
  const username = "Chai aur code"
  return (
    <>
      <Chai/>
      <h1>Chai aur {username}</h1>
    </>
  )
}
//{} - this represents a final value evaluated through javascript
// this will be a evaluated expression 
// no if for loops etc 

//actually jsx wants this to return only single element
//so therefore we have <></> fragments in this
// we use this fragment to wrap multiple elements

export default App
