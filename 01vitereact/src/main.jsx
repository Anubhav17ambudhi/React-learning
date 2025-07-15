import React,{ StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function Myapp(){
  return (
    <div>
      <h1>Custom App!!</h1>
    </div>
  )
}

// const ReactElement = {
//   type: 'a',
//   props: {
//     href: 'https://google.com',
//     target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

const anotherElement = (
  <a href="https://google.com" target='_blank'>visit google</a>
)

const anotherUser = "Chai aur sirf Chai"

const ReactElement = React.createElement(
  'a',
  {href:'https://google.com',target: '_blank'},
  'click me to visit google',
  Myapp//this will directly be inject as a evaluated expression
)

ReactDOM.createRoot(document.getElementById('root')).
render(

    ReactElement
  
)
//strictMode can be removed easily