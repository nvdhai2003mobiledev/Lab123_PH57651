import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useState, useContext } from 'react'

const ThemeContext = createContext();
export const CustomTheme = ({ children }) => {
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => {
    console.log('Theme dang dung: ' + theme);
    setTheme(theme === 'light' ? 'dark' : 'light');
    console.log('Da chuyen sang theme: ' + theme);
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }} >
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext);



