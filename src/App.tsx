import React, { ReactElement} from 'react'
import useCachedResources from './hooks/useCachedResources';
import {useColorScheme} from 'react-native'
import ThemeProvider from './ThemeProvider';

import AppNavigator from './AppNavigator'
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const DarkTheme = {
  dark: true,
  colors: {
    primary: '#50E3C2',
    background: '#1D1E1F',
    card: '#1D1E1F',
    text: '#ffffff',
    border: '#ff06f4',
    notification: 'rgb(255, 69, 58)'
  }
}

const LightTheme = {
  dark: false,
  colors: {
    primary: '#ff06f4',
    background: '#ffffff',
    card: '#1D1E1F',
    text: '#ffffff',
    border: '#ff06f4',
    notification: 'red'
  }
}

const App = (): ReactElement => {
  const isLoadingComplete = useCachedResources();
  const scheme = useColorScheme()
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      
      <ThemeProvider theme={scheme === 'dark' ? DarkTheme : LightTheme}>
        <GestureHandlerRootView style={{ flex: 1}}>
          <AppNavigator />
          </GestureHandlerRootView>
        </ThemeProvider>
      
        
      
    )
  }
}

export default App