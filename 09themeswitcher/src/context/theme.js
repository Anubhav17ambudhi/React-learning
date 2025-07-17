import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {}
})

//here darkTheme and lightTheme are not defined in functionality we have just defined
//functions not functionality

export const ThemeProvider = ThemeContext.Provider

//custom hooks bhi bana skte hain

export default function useTheme(){
  return useContext(ThemeContext);
  //this can help us not to do two imports that is
  // one for the useContext and one for the context of which we are talking
  //direct import of this useTheme combines both of them
}