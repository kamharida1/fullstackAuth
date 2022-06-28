import {
  StyleSheet,
  Platform,
  StatusBar,
  Text,
  View,
  ViewStyle,
  StyleProp
} from 'react-native'
import React, { useState, memo } from 'react'
import Constants from 'expo-constants'

interface StatusT {
  visible?: boolean
  backgroundColour: string
  message: string
  color: string
  viewStyle?: StyleProp<ViewStyle>
  height?: number
}

const statusHeight = (Platform.OS === 'ios' ? Constants.statusBarHeight : 0)

const styles = StyleSheet.create({
  status: {
    zIndex: 1,
    height: statusHeight,
  },
  messageContainer: {
    zIndex: 1,
    position: 'absolute',
    top: statusHeight + 20,
    right: 0,
    left: 0,
    height: 60,
    alignItems: 'center'
  },
  bubble: {
    backgroundColor: 'red',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  text: {
    color: 'white',
  }
})

const Status = memo<StatusT>(({
  visible,
  backgroundColour,
  message,
  color,
  height,
  viewStyle
}) => {
  // const [isConnected, setIsConnected] = useState(visible);
  // //const backgroundColor = isConnected ? 'white' : 'red'
  
  const statusBar = (
    <StatusBar
      backgroundColor={backgroundColour}
      barStyle={visible ? 'light-content' : 'dark-content'}
      animated={false}
    />
  )
  const messageContainer = (
    <View style={[
      styles.messageContainer,]}
      pointerEvents={'none'}
    >
      {statusBar}
      {visible && (
        <View style={[styles.bubble]}>
          <Text style={[styles.text, {color}]}>{message}</Text>
        </View>
      )}
    </View>
  )
  if (Platform.OS === 'ios') {
    return (
      <View style={[styles.status, { backgroundColor: backgroundColour }]}>
        {messageContainer}
      </View>
    )
  }
  return messageContainer;
})

export { Status }