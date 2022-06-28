import { View, Text, Platform, StyleSheet } from 'react-native'
import React, { memo } from 'react'
import { Background } from '../Background'
import { Star } from '../Star'
import { Avatar } from '../Avatar'
import { Space } from '../Space'
import { ButtonIconCircle } from '../ButtonIconCircle'
import { Txt } from '../Txt'
import { Device } from '../../constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 12,
    height: 310
  },
  starStyle: {
    position: 'absolute',
    top: 15,
    right: Platform.OS === 'ios' ? 15 : 28,
    zIndex: 1
  },
  avartarStyle: {
    position: 'absolute',
    ...Device.select({
      mobile300: {
        top: 110
      },
      mobile315: {
        top: 110
      },
      mobile342: {
        top: 110
      },
      mobile360: {
        top: 110
      },
      mobile375: {
        top: 140
      },
      mobile400: {
        top: 140
      },
      mobile410: {
        top: 160
      },
      mobile415: {
        top: 160
      },
      mobile480: {
        top: 160
      },
      zIndex: 0
    })
  },
  telephone: {
    bottom: 20,
    right: 100
  },
  balloon: {
    bottom: 55,
    left: 100
  },
  sound: {
    bottom: 70
  },
  h1: {
    textAlign: 'center',
    bottom: 65
  }
})

interface HeaderMasterT {
  user?: {
    name: string
    uri: string
    star: boolean
  }
}

const HeaderMaster = memo(({ user }: HeaderMasterT) => {
  const { container, starStyle, avartarStyle, balloon, telephone, sound, h1} = styles
  const {name, uri, star} = user
  return (
    <View style={container}>
      <>
        <Background uri='https://images.unsplash.com/photo-1575722290270-626b0208df99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGRhcmslMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'>
          <Star star={star} viewStyle={starStyle} />
          <Avatar uri={uri} viewStyle={avartarStyle} size="xLarge" />
        </Background>
      </>
      {/* <Space height={40} /> */}
      <ButtonIconCircle name="telephone_receiver" viewStyle={telephone} />
      <ButtonIconCircle name="thought_balloon" viewStyle={balloon} />
      <ButtonIconCircle name="loud_sound" viewStyle={sound} />
      <Txt h1 title={name} textStyle={h1} />
    </View>
    
  )
})

export { HeaderMaster }