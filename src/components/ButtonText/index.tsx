import { View, Text, TouchableOpacity } from 'react-native'
import React, { memo } from 'react'
import {Txt} from '../Txt'

interface ButtonTextT {
  title: string;
  onPress?: ()=> void
}

const ButtonText = memo<ButtonTextT>(({
  title, onPress
}) => {
  return (
    <TouchableOpacity>
      <Txt h8 title={title} />
    </TouchableOpacity>
  )
})

export { ButtonText }