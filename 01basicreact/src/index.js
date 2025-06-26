import React from 'react';//core foundational library
import ReactDOM from 'react-dom/client';//reacts' impolementation on web
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));//virtual dom is made here
// main dom is different 
// a new root in the virtual dom is created by react using the element in the html file or the orignal dom
// and we searched that element and then inserted our application in the same element which we searched in the dom
//and we stored it in the variable in the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//this react.StrictMode is a safe mode which has multiple benifits 
// although this can be removed just remove both the tags
// and all we'll be left with is App rendered by root

//what is App here
//app is a function that is returning an html
// this function is then rendered by react

// in a way we can create our own html tags because <App/> is not a tag

