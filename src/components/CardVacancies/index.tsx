import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native'
import React, { memo, useState } from 'react'
import { CardBorder } from '../CardBorder'
import { Txt } from '../Txt'
import { W } from '../../constants'
import { Star } from '../Star'
import { Space } from '../Space'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  h: {
    right: Platform.OS === 'ios' ? 0 : 10
  }
})

interface CardVacanciesT {
  obj: {
    title: string
    description: string
    owner: string
    rate: string
  },
  onPress?: () => void
  detail?: boolean
}

const CardVacancies = memo(({ obj, onPress, detail }: CardVacanciesT) => {
  const { title, description, owner, rate } = obj
  const { h, container } = styles
  const [ star, setStar] = useState(false)
  return (
    <>
      <CardBorder>
        <View style={container}>
          <Txt h1 title={title} textStyle={{ width: W - 110 }} numberOfLines={1} />
          {true && <Star star={star} onPress={(): void => setStar(!star)} />}
        </View>
        <Space height={20} />
        <TouchableOpacity onPress={onPress}>
          {detail ? <Txt body title={description} /> : <Txt body numberOfLines={4} title={description} />}
        </TouchableOpacity>
        <Space height={20} />
        <View style={container}>
          <Txt h7 title={owner} textStyle={{ width: W - 140 }} numberOfLines={1} />
          <Txt h7 title={`$ ${rate}`} textStyle={h} />
        </View>
      </CardBorder>
    </>
  )
})

export { CardVacancies }