import { View, Text, StyleSheet, StyleProp, ViewStyle, TouchableOpacity, Platform } from 'react-native'
import React, { memo } from 'react'
import { useTheme } from '@react-navigation/native'
import { black, white, primary, secondary } from '../../constants'
import Emoji from 'react-native-emoji'

const circle = {
  width: 50,
  height: 50,
  borderRadius: 50 / 2
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center'
  },
  blue: {
    ...circle,
    height: 51,
    width: 51
  },
  pink: {
    ...circle,
    top: 1,
    height: 51.4
  },
  iconBg: {
    ...circle,
    justifyContent: 'center',
    alignItems: 'center'
  },
  emoji: {
    left: Platform.OS === 'ios' ? 3 : 0,
    fontSize: Platform.OS === 'ios' ? 28 : 16
  }
})

interface ButtonIconCircleT {
  uri?: string
  name: string
  onPress?: () => void
  viewStyle?: StyleProp<ViewStyle>
}

const ButtonIconCircle = memo<ButtonIconCircleT>(({ name, onPress, viewStyle }) => {
  const { container, pink, blue, iconBg, emoji } = styles
  const { dark } = useTheme()
  const backgroundColor = dark ? black : '#fff'
  return (
    <TouchableOpacity onPress={onPress} style={[container,viewStyle]}>
      <View style={[blue, { backgroundColor: primary}]}>
        <View style={[pink, { backgroundColor: secondary}]}>
          <View style={[iconBg, { backgroundColor}]}>
            <Emoji name={name} style={emoji} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
})

export { ButtonIconCircle }