import { View, Text, StyleSheet } from 'react-native'
import React, { memo } from 'react'
import { Star } from '../Star'
import { Avatar } from '../Avatar'
import { Space } from '../Space'
import { Txt } from '../Txt'
import { ButtonRate } from '../ButtonRate'
import { CardBorder } from '../CardBorder'
import { CardInfo } from '../CardInfo'

const styles = StyleSheet.create({
  starStyle: {
    position: 'absolute',
    top: 10,
    right: 10,
    justifyContent: 'flex-end'
  },
})

interface CardResumeT {
  obj?: {
    title: string
    avatar: string
    rate: number
    cost: number
  },
  obj2?: {
    position: string
    language: string
    stack: string
    experience: string
  },
  bool?: boolean
}

const CardResume = memo(({ obj, obj2, bool = true }: CardResumeT) => {
  const { title, rate, avatar } = obj
  const { starStyle } = styles
  const user = (
    <>
      <View style= { starStyle}> 
        <Star star={ bool} />
      </View>
      <Avatar uri={avatar} size="large" />
      {/* <Avatar size='large' uri={"https://picsum.photos/id/78/200/300"} /> */}
      <Space height={20} />
      <Txt h1 title={title} textStyle={{ textAlign: 'center' }} />
      <Space height={20} />
      <ButtonRate title={rate} />
      <Space height={20} />
    </>
  )
  return (
    <>
      <CardBorder>
        { bool && user  }
        <CardInfo obj={obj2} bool={false} />
      </CardBorder>
    </>
  )
})

export {CardResume}