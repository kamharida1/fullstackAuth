import { View, Text } from 'react-native'
import React, { memo } from 'react'
import { CardBorder } from '../CardBorder'
import { Txt } from '../Txt'

interface CardAboutT {
  title: string
}

const CardAbout = memo<CardAboutT>(({title}) => {
  return (
    <>
      <CardBorder border>
        <Txt h3 title={ title }/>
      </CardBorder>
    </>
  )
})

export { CardAbout }