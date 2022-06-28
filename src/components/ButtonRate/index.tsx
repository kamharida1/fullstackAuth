import { View, Text, StyleSheet, StyleProp, ViewStyle, TouchableOpacity, Platform } from 'react-native'
import React, { memo } from 'react'
import Emoji from 'react-native-emoji'
import { Txt } from '../Txt'

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    alignSelf: 'center'
  },
  sub: {
    flexDirection: 'row'
  },
  emoji: {
    fontSize: 18,
    marginBottom: 0
  },
  h: {
    width: 80,
    top: Platform.OS === 'ios' ? 4 : 5,
    paddingLeft: 6
  }
})

interface ButtonRateT {
  title: string
  viewStyle?: StyleProp<ViewStyle>
  onPress?: () => void
}

const ButtonRate = memo<ButtonRateT>(({ title, viewStyle, onPress }) => {
  const { container, sub, emoji, h} = styles
  return (
    <TouchableOpacity onPress={onPress} style={[container, viewStyle]}>
      <View style={sub}>
        <Emoji name="unicorn_face" style={emoji} />
        <Txt h8 title={String(title)} textStyle={h} numberOfLines={1} ellipsizeMode="tail" />
      </View>
    </TouchableOpacity>
  )
})

export {ButtonRate} 