import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import React, {memo} from 'react'
import { Txt } from '../Txt'
import { gray } from '../../constants'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  h: {
    fontFamily: 'Narrow',
    color: gray
  },
})

interface CostT {
  title: string
  viewStyle?: StyleProp<ViewStyle>
}

const Cost = memo(({ title, viewStyle }: CostT) => {
  const { container, h } = styles
  return (
    <View style={[container, viewStyle]}>
      <Txt h8 textStyle={h} title={`$ ${title}`} />
    </View>
  )
})

export { Cost }

