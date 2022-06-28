import { View, Text, StyleProp, TextStyle } from 'react-native'
import React, {memo } from 'react'
import { ScaledSheet } from 'react-native-size-matters'

const styles = ScaledSheet.create({
  container: {},
  h1: {}
})

interface TextErrorT {
  title: string
  onPress?: () => void
  textStyle?: StyleProp<TextStyle>
}

const TextError = memo<TextErrorT>(({ title, onPress, textStyle }) => {
  const { container, h1} = styles
  return (
    <View style={container}>
      <Text style={[h1, textStyle]} onPress={onPress}>{title}</Text>
    </View>
  )
})

export { TextError}