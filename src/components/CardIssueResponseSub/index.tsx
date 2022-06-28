import { View, Text } from 'react-native'
import React, { memo } from 'react'
import { ButtonDeveloperSub } from '../ButtonDeveloperSub'
import { CardBorder } from '../CardBorder'
import { Txt } from '../Txt'
import { Space } from '../Space'

interface Props {
  obj: {
    name: string
    description: string
    uri: string
    rate: number
  }
}

const CardIssueResponseSub = memo<Props>(({ obj }) => {
  const {name, description, uri, rate} = obj
  return (
    <>
      <CardBorder border>
        <Txt body title={description} />
        <Space height={20} />
        <ButtonDeveloperSub title={name} uri={uri} rate={`${rate}`} />
      </CardBorder>
    </>
  )
})

export { CardIssueResponseSub }