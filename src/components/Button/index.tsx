import { View, Text, StyleSheet, StyleProp, TextStyle, TouchableOpacity, Platform } from 'react-native'
import React, { memo } from 'react'
import { secondary, primary, W } from '../../constants'
import { Txt } from '../Txt'

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    alignSelf: 'center'
  },
  sub: {
    marginRight: -5,
    marginTop: 2,
    marginBottom: 3,
    marginLeft: -5,
    borderWidth: 1,
    alignSelf: 'center'
  },
  h: {
    width: W - (Platform.OS === 'ios' ? 150 : 180),
    paddingTop: Platform.OS === 'ios' ? 15 : 0,
    paddingBottom: 7,
    textAlign: 'center',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1
  }
})

interface ButtonT {
  title: string
  cancel?: boolean
  onPress?: () => void
  textStyle?: StyleProp<TextStyle>
}

const Button = memo<ButtonT>(({
  title,cancel,onPress,textStyle
}) => {
  const { container, sub, h} =styles
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[container, {borderColor: secondary}]}>
        <View style={[sub, {borderColor: primary}]}>
          <Txt
            textStyle={[h, textStyle, { textShadowColor: secondary }]}
            title={title} cancel={cancel}
          />
        </View>
      </View>
    </TouchableOpacity>
  )
})

export { Button }