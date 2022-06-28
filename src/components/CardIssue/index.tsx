import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { memo } from 'react'
import { CardBorder } from '../CardBorder'
import { Txt } from '../Txt'
import { Space } from '../Space'
import { ButtonComments } from '../ButtonComments'
import { ButtonDeveloperSub } from '../ButtonDeveloperSub'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
})

interface Props {
  obj: { 
    title: string
    description: string
    uri: string
    name: string
    comments: number
    rate: number
  },
  onPress?: () => void
}

const Cardissue = memo<Props>(({
obj, onPress
}) => {
  const { title, description, name, comments, uri, rate } = obj 
  return (
    <>
      <CardBorder>
        <TouchableOpacity onPress={ onPress }>
          <Txt h1 title={title} ViewStyle={{ marginTop: 25 }} numberOfLines={1} ellipsizeMode='tail' />
          <Space height={10} />
          <Txt body title={description} numberOfLines={4} ellipsizeMode='tail' />
          <Space height={15} />
        </TouchableOpacity>
        <ButtonComments title={`${comments}`} viewStyle={{ paddingLeft: 5 }} />
        <View>
          <ButtonDeveloperSub title={name} uri={uri} rate={`${rate}`} />
        </View>
      </CardBorder>
    </>
  )
})

export { Cardissue }