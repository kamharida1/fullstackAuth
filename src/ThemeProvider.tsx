import React, { memo } from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'


interface ThemeProviderT {
  children?: React.ReactNode
  theme: {
    dark: boolean
    colors: {
      primary: string
      background: string
      card: string
      text: string
      border: string
      notification: string
    }
  }
}

const ThemeProvider = memo<ThemeProviderT>(({ children, theme }) => {
  return (
    <>
        <NavigationContainer theme={theme}>{children}</NavigationContainer>
    </>
  )
})

export default ThemeProvider