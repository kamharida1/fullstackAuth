import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { memo } from 'react'
import { ButtonDeveloperSub } from '../ButtonDeveloperSub'
import { ButtonMarkDecision } from '../ButtonMarkDecision'
import { CardBorder } from '../CardBorder'
import { ButtonComments } from '../ButtonComments'
import { Txt } from '../Txt'
import { Space } from '../Space'

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  align: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  commentStyle: {},
})

interface Props {
  obj?: {
    uri: string
    description: string
    name: string
    comments: number
    rate: number
  },
  onPress?: () => void
}

const CardIssueResponse = memo<Props>(({ obj, onPress }) => {
  const { row, align, commentStyle } = styles
  const { uri, description, name, comments, rate } = obj
  return (
    <>
      <CardBorder border>
        <View style={align}>
          <ButtonComments title={comments} viewStyle={commentStyle} />
          <ButtonMarkDecision />
        </View>
        <TouchableOpacity onPress={onPress}>
          <Space height={20} />
          <Txt body title={description} />
          <Space height={20} />
        </TouchableOpacity>
        <View style={row}>
          <ButtonDeveloperSub title={name} uri={uri} rate={rate} />
        </View>
      </CardBorder>
    </>
  )
})

export { CardIssueResponse }
