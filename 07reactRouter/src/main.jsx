import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromChildren, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './layout.jsx'
import Home from './components/Home/home.jsx'
import About from './components/about/about.jsx'
import Contact from './components/contactus/contact.jsx'
import User from './components/user/User.jsx'
import Github, { githubInfoLoader } from './components/github/github.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])//there is a second way to do it

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = "/" element = {<Layout/>}>
      <Route path = '/' element = {<Home />} />
      <Route path = '/about' element = {<About />} />
      <Route path = '/contact' element = {<Contact />} />
      <Route path = 'user/:userid' element = {<User />} />
      <Route 
      loader = {githubInfoLoader}
      path = 'github' 
      element = {<Github />}
      />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
