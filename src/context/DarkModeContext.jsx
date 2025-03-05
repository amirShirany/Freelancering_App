import { createContext, useContext, useEffect, useState } from "react"

const DarkModeContext = createContext()

//Provider
export function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev)

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark-mode")
      document.documentElement.classList.remove("light-mode")
    } else {
      document.documentElement.classList.add("light-mode")
      document.documentElement.classList.remove("dark-mode")
    }
  }, [isDarkMode])

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}

//custom Hook for use
export function useDarkMode() {
  const context = useContext(DarkModeContext)
  if (context === undefined)
    throw new Error("useDarkMode must be used within a DarkModeProvider")
  return context
}
