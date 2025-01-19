import { createContext,useContext } from "react";
export const ThemeContext=createContext({
    themeMode:"light",//variable //setting default variable light
    darkTheme:()=>{},
    lightTheme:()=>{}//method
})
export const ThemeProvider=ThemeContext.Provider//variable is getting export

export default function useTheme()
{
    return useContext(ThemeContext)//if we need access any of it can access by using useTheme
}