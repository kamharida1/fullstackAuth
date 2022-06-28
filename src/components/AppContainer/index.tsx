import React, { memo } from 'react'
import { StyleSheet, View, ScrollView, Text, GestureResponderEvent } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { useTheme } from '@react-navigation/native'
import { Header } from '../Header'
import { Space } from '../Space'
import { Loading } from '../Loading'
import { black, white } from '../../constants'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  },
  sub: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10
  }
})

const RED = '#FC2847'

interface AppContainerT {
  flatList?: boolean
  iconLeft?: string
  onPress?: ((event: GestureResponderEvent) => void) | undefined
  onPressRight?: ((event: GestureResponderEvent) => void) | undefined
  iconRight?: string
  children?: JSX.Element|JSX.Element[];
  message?: string
  title?: string
  loading?: boolean
}

const AppContainer = memo<AppContainerT>(({ 
  flatList = false,
  iconLeft = 'angle-double-left',
  onPress ,
  onPressRight  ,
  iconRight,
  children,
  message = '',
  title,
  loading = false
}) => {
  const { container, sub } = styles
  const { dark } = useTheme()
  return (
    <View style={[container, { backgroundColor: dark ? black : white}]}>
      {title && (
        <Header
          title={title}
          onPress={onPress}
          onPressRight={onPressRight}
          iconLeft={iconLeft}
          iconRight={iconRight}
        />
      )}
      <>
        {loading ? (
          <Loading />
        ) : (
            <>
              {!flatList ? (
                <ScrollView contentContainerStyle={[sub, { flexGrow: 1}]}>
                  {children}
                  <Space height={ 60} />
                </ScrollView>
              ) : (
                  <>
                    <View style={sub}>{children}</View>
                  </>
              )}
            </>
        )}
      </>
    </View>
  )
})

export {AppContainer}

