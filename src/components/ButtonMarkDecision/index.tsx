import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native'
import React, { memo } from 'react'
import { Txt } from '../Txt'
import Emoji from 'react-native-emoji'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection: 'row'
  },
  emoji: {
    fontSize: 18,
    bottom: Platform.OS === 'ios' ? 0 : 4
  }
})

interface ButtonMarkDecisionT {
  onPress?: () => void
}

const ButtonMarkDecision = memo<ButtonMarkDecisionT>(({ onPress }) => {
  const { container, emoji } = styles
  return (
    <TouchableOpacity onPress={onPress} style={container}>
      <Txt h7 title="mark decision" textStyle={{ marginRight: 5, marginTop: 2 }} />
      <Emoji name="unicorn_face" style={emoji} />
   </TouchableOpacity>
  )
})

export { ButtonMarkDecision }