import { View, Text, StyleSheet, StyleProp, TextStyle, ViewStyle, TouchableOpacity } from 'react-native'
import React, { memo } from 'react'
import { primary, secondary, white } from '../../constants'
import { Txt } from '../Txt'

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    justifyContent: 'center',
    borderRadius: 17,
    borderColor: white,
    // width: '40%',
    // height: 50,
    marginTop: 2,
    marginLeft: 5
  },
  h: {
    padding: 15,
    color: primary,
    alignSelf: 'center'
  },
})

interface ButtonStatusIssueT {
  title: string
  color?: string
  open?: boolean
  textStyle?: StyleProp<TextStyle>
  viewStyle?: StyleProp<ViewStyle>
  onPress?: () => void 
}

const ButtonStatusIssue = memo<ButtonStatusIssueT>(({ title, open, textStyle, viewStyle, onPress }) => {
  const { h, container} = styles
  return (
    <View style={[container, viewStyle, { borderColor: open ? primary : secondary }]}>
      <TouchableOpacity onPress={onPress}>
        <Txt
          h9
          textStyle={[h, textStyle, { textShadowColor: secondary, color: open ? primary : secondary }]}
          title={title}
        />
      </TouchableOpacity>
    </View>
  )
})

export { ButtonStatusIssue }