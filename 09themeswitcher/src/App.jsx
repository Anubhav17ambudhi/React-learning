import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider } from './context/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
  const [themeMode,setThemeMode] = useState("light")

  //to define the functionality of a defined context 
  //the same name methods can be created and automatically the same functionality goes 
  // the corresponding methods in it
  const lightTheme = () => {
    setThemeMode("light")
  }
  const darkTheme = () => {
    setThemeMode("dark")
  }

  //actuall change in the theme

  useEffect(() => {
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode);
  },[themeMode])

  return (
    <ThemeProvider value = {{themeMode,lightTheme,darkTheme}}>
      <div className="bg-white dark:bg-black text-black dark:text-white p-10">
  <h1>Hello from Tailwind</h1>
</div>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn />
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card/>
                  
              </div>
          </div>
      </div>

    </ThemeProvider>
  )
}

export default App
